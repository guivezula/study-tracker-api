import request from 'supertest';
import app from '../../app';

describe('GraphQL - Course resolver', () => {

  it('should create a course', async () => {
    const response = await request(app)
      .post('/query')
      .set('Content-Type', 'application/json')
      .send({
        query: `
          mutation {
            createCourse(input: { title: "GraphQL Course" }) {
              id
              title
              description
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();

    expect(response.body.data.createCourse).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: 'GraphQL Course',
        description: null,
      })
    );
  });

  it('should list courses', async () => {
    const response = await request(app)
      .post('/query')
      .set('Content-Type', 'application/json')
      .send({
        query: `
          query {
            courses {
              data {
                id
                title
              }
              total
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(Array.isArray(response.body.data.courses.data)).toBe(true);
  });

  it('should return a course by id', async () => {
    const createResponse = await request(app)
      .post('/query')
      .send({
        query: `
          mutation {
            createCourse(input: { title: "Single Course" }) {
              id
            }
          }
        `,
      });

    const courseId = createResponse.body.data.createCourse.id;

    expect(courseId).toBeDefined();

    const response = await request(app)
      .post('/query')
      .send({
        query: `
          query {
            course(id: "${courseId}") {
              id
              title
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.course).toEqual(
      expect.objectContaining({
        id: courseId,
        title: 'Single Course',
      })
    );
  });

    it('should update a course', async () => {
    const createResponse = await request(app)
      .post('/query')
      .send({
        query: `
          mutation {
            createCourse(input: { title: "Course to Update" }) {
              id
            }
          }
        `,
      });

    const courseId = createResponse.body.data.createCourse.id;

    expect(courseId).toBeDefined();

    const response = await request(app)
      .post('/query')
      .send({
        query: `
          mutation {
            updateCourse(id: "${courseId}", input: { title: "Updated Course" }) {
              id
              title
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.updateCourse).toEqual(
      expect.objectContaining({
        id: courseId,
        title: 'Updated Course',
      })
    );
  });

  it('should delete a course', async () => {
    const createResponse = await request(app)
      .post('/query')
      .send({
        query: `
          mutation {
            createCourse(input: { title: "Course to Delete" }) {
              id
            }
          }
        `,
      });

    const courseId = createResponse.body.data.createCourse.id;

    expect(courseId).toBeDefined();

    const response = await request(app)
      .post('/query')
      .send({
        query: `
          mutation {
            deleteCourse(id: "${courseId}")
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.deleteCourse).toBe(
      true
    );  
    });
});
