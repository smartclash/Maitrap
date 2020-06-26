import { Request, Response } from "express";

interface ControllerFunc {
	(request: Request, response: Response)
}
