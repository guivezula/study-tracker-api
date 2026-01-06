import request from 'supertest';
import app from '../../app';

const URL = '/api/courses';

describe('REST - Courses API', () => {
  it('should return 201 when creates a course', async () => {
    const response = await request(app)
      .post(URL)
      .send({ title: 'Test Course' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({ title: 'Test Course' })
    );
    expect(response.body).toHaveProperty('id');
  });


  it('should return 400 when tittle is missing', async () => {
    const response = await request(app)
      .post('/api/courses')
      .send({});

    expect(response.status).toBe(400);
  });

  it('should return 200 and list of courses', async () => {
    const response = await request(app).get(URL);

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should return 200 and a course by ID', async () => {
    const createResponse = await request(app)
      .post(URL)
      .send({ title: 'Course to Get', description: 'Description' });

    const courseId = createResponse.body.id;

    const response = await request(app).get(`${URL}/${courseId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ id: courseId, title: 'Course to Get', description: 'Description' })
    );
  });

  it('should return 404 when course not found by ID', async () => {
    const response = await request(app).get(`${URL}/nonexistent-id`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Course not found' });
  });

  it('should return 200 when updates a course', async () => {
    const createResponse = await request(app)
      .post(URL)
      .send({ title: 'Course to Update', description: 'Old Description' });

    const courseId = createResponse.body.id;

    const response = await request(app)
      .put(`${URL}/${courseId}`)
      .send({ title: 'Updated Course', description: 'New Description' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ id: courseId, title: 'Updated Course', description: 'New Description' })
    );
  });

  it('should return 400 when updating with invalid data', async () => {
    const createResponse = await request(app)
      .post(URL)
      .send({ title: 'Course to Update', description: 'Description' });

    const response = await request(app)
      .put(`${URL}/invalid-id`)
      .send({ title: 'Test' });

    expect(response.status).toBe(400);
  });
    

  it('should return 204 when deletes a course', async () => { 
    const createResponse = await request(app)
      .post(URL)
      .send({ title: 'Course to Delete', description: 'Description' });

    const courseId = createResponse.body.id;

    const response = await request(app).delete(`${URL}/${courseId}`);

    expect(response.status).toBe(204);
  });

  it('should return 400 when deleting with invalid ID', async () => {
    const response = await request(app).delete(`${URL}/invalid-id`);

    expect(response.status).toBe(400);
  });
});
