import request from "supertest";
import app from "../src/app";
import path from "path";
import { StatusCodes } from "http-status-codes";
const sampleFilesPath = path.resolve(__dirname, "files");

describe("Uploads", () => {
    it("should upload a image file", async () => {        
        const response = await request(app.express)
            .post("/api/files")
            .attach("file", sampleFilesPath + "/image1.jpeg");               

        expect(response.statusCode).toBe(StatusCodes.CREATED);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("message");
        expect(response.body.data).toHaveProperty("fileUrl");
        expect(response.body.data).toHaveProperty("thumbnailUrl");  

    });

    it("should upload a video file", async () => {        
        const response = await request(app.express)
            .post("/api/files")
            .attach("file", sampleFilesPath + "/video1.mp4");               

        expect(response.statusCode).toBe(StatusCodes.CREATED);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("message");
        expect(response.body.data).toHaveProperty("fileUrl");
        expect(response.body.data.thumbnailUrl).toBeUndefined();  

    });

    it("should throw error if file is not supported", async () => {        
        const response = await request(app.express)
            .post("/api/files")
            .attach("file", sampleFilesPath + "/csv1.csv");        

        expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
   
});