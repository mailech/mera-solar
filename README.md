# Solar Project Deployment

This repository is a **Monorepo** containing:
1.  **frontend/solar**: The React Frontend (Vite).
2.  **Admin**: The React Admin Dashboard (Vite).
3.  **Backend**: The Node.js/Express Backend.

## 🚀 How to Deploy the Frontend to Vercel

If you are seeing a **404: NOT_FOUND** error, it is because Vercel is trying to deploy the *root* folder instead of the frontend app.

**You must tell Vercel where the frontend code lives:**

1.  Go to your **Vercel Dashboard**.
2.  Select your **Project**.
3.  Go to **Settings** > **General**.
4.  Find the **"Root Directory"** section.
5.  Click **Edit** and enter: `frontend/solar`
6.  Click **Save**.
7.  Go to the **Deployments** tab and **Redeploy** the latest commit.

## 🛠️ Build Settings (Auto-Detected)
-   **Framework Preset**: Vite
-   **Build Command**: `npm run build`
-   **Output Directory**: `dist`
