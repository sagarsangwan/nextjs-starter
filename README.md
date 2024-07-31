
# Next.js Starter Kit with Prisma, CockroachDB, Auth.js, and ShadCN and Google Drive Upload

This starter kit provides a comprehensive setup for building scalable and secure applications with Next.js, Prisma ORM, CockroachDB, and Auth.js. The ShadCN template ensures a modern and responsive UI. It also includes functionality for uploading files to Google Drive.

## Features

- **Next.js**: The React framework for production.
- **Prisma ORM**: Type-safe database client with support for CockroachDB.
- **CockroachDB**: Distributed SQL database for cloud-native applications.
- **Auth.js**: Secure authentication with support for Google OAuth.
- **ShadCN**: Sleek and modern UI template.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Dark Mode**: Toggle between light and dark themes.
- **Google Drive Upload**: Functionality to upload files to Google Drive.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- CockroachDB setup and running.
- Google OAuth credentials.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/nextjs-starter.git my-new-project
   cd my-new-project
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Rename `.env.sample` to `.env`.
   - Update the following variables in the `.env` file with your credentials:
     ```env
     AUTH_SECRET={YOUR_SECRET_KEY_THIS_COULD_BE_A_RANDOM_STRING}
     AUTH_GOOGLE_ID={CLIENT_ID}
     AUTH_GOOGLE_SECRET={CLIENT_SECRET}
     DATABASE_URL={DATABASE_URL}
     Google Drive Service Account Credentials
      GOOGLE_DRIVE_TYPE={YOUR_SERVICE_ACCOUNT_TYPE}
      GOOGLE_DRIVE_PROJECT_ID={YOUR_PROJECT_ID}
      GOOGLE_DRIVE_PRIVATE_KEY_ID={YOUR_PRIVATE_KEY_ID}
      GOOGLE_DRIVE_PRIVATE_KEY={YOUR_PRIVATE_KEY}
      GOOGLE_DRIVE_CLIENT_EMAIL={YOUR_CLIENT_EMAIL}
      GOOGLE_DRIVE_CLIENT_ID={YOUR_CLIENT_ID}
      GOOGLE_DRIVE_AUTH_URI={YOUR_AUTH_URI}
      GOOGLE_DRIVE_TOKEN_URI={YOUR_TOKEN_URI}
      GOOGLE_DRIVE_AUTH_PROVIDER_X509_CERT_URL={YOUR_AUTH_PROVIDER_X509_CERT_URL}
      GOOGLE_DRIVE_CLIENT_X509_CERT_URL={YOUR_CLIENT_X509_CERT_URL}
      GOOGLE_DRIVE_UNIVERSE_DOMAIN={YOUR_UNIVERSE_DOMAIN}
     ```

4. **Push Prisma Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   Your application should now be running on [http://localhost:3000](http://localhost:3000).

### Adding a New Git Repository
1. **Remove the Existing Git Repository:**
    ```bash
    rm -rf .git
    ```


2. **Initialize a Git Repository:**
   ```bash
   git init
   ```

3. **Add Files to the Repository:**
   ```bash
   git add .
   ```

4. **Commit the Files:**
   ```bash
   git commit -m "Initial commit"
   ```

5. **Create a New Repository on GitHub:**
   - Go to GitHub and create a new repository.

6. **Add the Remote Repository:**
   ```bash
   git remote add origin https://github.com/your-username/my-new-project.git
   ```
7. **Push the Changes:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Customization

#### Updating the UI
- Modify the ShadCN template files in the `/components` directory to customize the UI according to your needs.

#### Adding New Models
- Update the Prisma schema in `prisma/schema.prisma` to add new models.
- Run `npx prisma migrate dev` to apply the new migrations.

#### Google Drive Upload
- The Google Drive upload function is included. Configure your Google Drive API credentials in the .env file. You can upload files using the provided API routes. Refer to the implementation in lib\upload-to-drive.js for details.

### Authentication

This starter kit uses Auth.js for authentication. By default, Google OAuth is set up. You can add more providers by following the Auth.js documentation.

The starter kit requires the following environment variables for auth :

- `AUTH_SECRET`: A random string used for session encryption.
- `AUTH_GOOGLE_ID`: Your Google OAuth client ID.
- `AUTH_GOOGLE_SECRET`: Your Google OAuth client secret.
- `DATABASE_URL`: The connection string for your CockroachDB instance.

Here’s an updated section for your `.env` file to include Google Drive Service Account credentials:

### `.env` File Configuration

Ensure that your `.env` file includes the following environment variables for Google Drive Service Account integration:

```env
AUTH_SECRET={YOUR_SECRET_KEY_THIS_COULD_BE_A_RANDOM_STRING}
AUTH_GOOGLE_ID={CLIENT_ID}
AUTH_GOOGLE_SECRET={CLIENT_SECRET}
DATABASE_URL={DATABASE_URL}

# Google Drive Service Account Credentials
GOOGLE_DRIVE_TYPE={YOUR_SERVICE_ACCOUNT_TYPE}
GOOGLE_DRIVE_PROJECT_ID={YOUR_PROJECT_ID}
GOOGLE_DRIVE_PRIVATE_KEY_ID={YOUR_PRIVATE_KEY_ID}
GOOGLE_DRIVE_PRIVATE_KEY={YOUR_PRIVATE_KEY}
GOOGLE_DRIVE_CLIENT_EMAIL={YOUR_CLIENT_EMAIL}
GOOGLE_DRIVE_CLIENT_ID={YOUR_CLIENT_ID}
GOOGLE_DRIVE_AUTH_URI={YOUR_AUTH_URI}
GOOGLE_DRIVE_TOKEN_URI={YOUR_TOKEN_URI}
GOOGLE_DRIVE_AUTH_PROVIDER_X509_CERT_URL={YOUR_AUTH_PROVIDER_X509_CERT_URL}
GOOGLE_DRIVE_CLIENT_X509_CERT_URL={YOUR_CLIENT_X509_CERT_URL}
GOOGLE_DRIVE_UNIVERSE_DOMAIN={YOUR_UNIVERSE_DOMAIN}
```

### Explanation of Variables

- **GOOGLE_DRIVE_TYPE**: The type of the service account, usually `service_account`.
- **GOOGLE_DRIVE_PROJECT_ID**: Your Google Cloud project ID.
- **GOOGLE_DRIVE_PRIVATE_KEY_ID**: The private key ID associated with your service account.
- **GOOGLE_DRIVE_PRIVATE_KEY**: The private key for your service account (ensure this is in the correct format with newline characters escaped if necessary).
- **GOOGLE_DRIVE_CLIENT_EMAIL**: The email address associated with your service account.
- **GOOGLE_DRIVE_CLIENT_ID**: The client ID for your service account.
- **GOOGLE_DRIVE_AUTH_URI**: The authorization URI.
- **GOOGLE_DRIVE_TOKEN_URI**: The token URI used to obtain access tokens.
- **GOOGLE_DRIVE_AUTH_PROVIDER_X509_CERT_URL**: The URL for the X.509 certificate of the authentication provider.
- **GOOGLE_DRIVE_CLIENT_X509_CERT_URL**: The URL for the X.509 certificate of the client.
- **GOOGLE_DRIVE_UNIVERSE_DOMAIN**: The universe domain for the service account.

Ensure you replace `{YOUR_*}` placeholders with actual values from your Google Cloud service account credentials.

### Additional Setup

If you haven't already, ensure that you have:

1. **Set Up Google Drive API**: Enable the Google Drive API in your Google Cloud Console and create a service account.
2. **Download Service Account Key**: Download the JSON file for the service account and extract the values to add to your `.env` file.

This setup allows your Next.js application to securely interact with Google Drive using a service account.

### Deployment

To deploy your application, follow the instructions for your chosen hosting provider. Here are the general steps for Vercel:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy the Application:**
   ```bash
   vercel
   ```

   Follow the prompts to complete the deployment.

### Contributing

Feel free to submit issues and pull requests to improve this starter kit.

### License

This project is licensed under the MIT License.

---

With this setup, you should have a solid foundation for starting your Next.js project with Prisma, CockroachDB, Auth.js, and ShadCN. Happy coding!