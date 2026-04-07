import { Router, Request, Response } from "express";
import { executeCode } from "../services/piston";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { language, version, code } = req.body;

        // Validation
        if (!language || !version || !code) {
            return res.status(400).json({
                error: "Missing required fields: language, version, and code",
            });
        }

        if (typeof code !== "string") {
            return res.status(400).json({ error: "Code must be a string" });
        }

        if (code.length > 50000) {
            return res.status(400).json({ error: "Code is too long (max 50000 characters)" });
        }

        // Execute the code
        const result = await executeCode({ language, version, code });

        res.json(result);
    } catch (error) {
        console.error("Execution error:", error);
        res.status(500).json({ error: "Failed to execute code" });
    }
});

export default router;