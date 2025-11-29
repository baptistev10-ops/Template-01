import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
const VALID_LICENSES = ["ADMIN-E4A9-8B3F-FD19-29C1-774A"];

export default defineConfig(() => {
  const license = process.env.VITE_LICENSE_KEY;

  if (!VALID_LICENSES.includes(license)) {
    throw console.error(
      "Accès refusé, vous devez avoir une license pour build la template"
    );
  }
  return {
    plugins: [react()],
  };
});
