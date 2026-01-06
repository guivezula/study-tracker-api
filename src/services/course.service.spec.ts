import { prisma } from "../lib/prisma";
import * as service from "./course.service";

describe("Course Service", () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  beforeEach(async () => {
    await prisma.course.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("creates a course", async () => {
    const result = await service.createCourse({
      title: "New Course",
      description: null,
    });

    expect(result.title).toBe("New Course");
  });

  it("get courses", async () => {
    await service.createCourse({ title: "Course 1", description: null });
    await service.createCourse({ title: "Course 2", description: null });

    const result = await service.getCourses({});

    expect(result.data.length).toBe(2);
  });

  it("filters courses by title", async () => {
    await service.createCourse({
      title: "JavaScript Basics",
      description: null,
    });
    await service.createCourse({ title: "Advanced Python", description: null });

    const result = await service.getCourses({ title: "JavaScript" });

    expect(result.data.length).toBe(1);
    expect(result.data[0]?.title).toBe("JavaScript Basics");
  });

  it("paginates courses", async () => {
    for (let i = 1; i <= 10; i++) {
      await service.createCourse({ title: `Course ${i}`, description: null });
    }

    const result = await service.getCourses({ page: 2, limit: 3 });

    expect(result.data.length).toBe(3);
    expect(result.data[0]!.title).toBe("Course 4");
  });

  it("get course by ID", async () => {
    const created = await service.createCourse({
      title: "Unique Course",
      description: null,
    });

    const result = await service.getCourseById(created.id);

    expect(result).not.toBeNull();
    expect(result?.title).toBe("Unique Course");
  });

  it("updates a course", async () => {
    const created = await service.createCourse({
      title: "Old Title",
      description: null,
    });

    const result = await service.updateCourse(created.id, {
      title: "Updated Title",
    });

    expect(result.title).toBe("Updated Title");
  });

  it("deletes a course", async () => {
    const created = await service.createCourse({
      title: "To Be Deleted",
      description: null,
    });

    const result = await service.deleteCourse(created.id);

    expect(result).not.toBeNull();

    const fetchDeleted = await service.getCourseById(created.id);
    expect(fetchDeleted).toBeNull();
  });
});
