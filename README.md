This AWS CloudFormation template deploys a serverless website infrastructure using Amazon S3 for storage and Amazon CloudFront as the CDN 
**Key Features**  

-   **Serverless Architecture:**  No servers to manage.
-   **Scalability:**  Handles traffic fluctuations effortlessly.
-   **Fast Content Delivery:**  CloudFront's global edge locations ensure low latency.
-   **Secure by Default:**  Configured to use HTTPS for all requests.
-   **Simplified Deployment:**  All resources are provisioned and managed with a single template.

**Infrastructure Components**  

1.  **S3 Bucket (globally-unique-bucket-name):**

-   Stores website content (HTML, CSS, JavaScript, images, etc.).
-   Configured as a static website host.
-   Bucket name:  `globally-unique-bucket-name`

1.  **CloudFront Distribution:**

-   Caches website content at edge locations for faster delivery.
-   Forces HTTPS to secure connections.
-   Uses S3 bucket as the origin for content.
-   Compression enabled for improved performance.

1.  **CloudFront Origin Access Identity (OAI):**

-   Special CloudFront user that allows CloudFront to access the S3 bucket securely.
-   Restricts direct public access to the S3 bucket.

1.  **S3 Bucket Policy:**

-   Defines access permissions for the S3 bucket.
-   Allows CloudFront (via the OAI) to read objects in the bucket.
-   Denies all other public access to the bucket's content.

**Prerequisites**  

-   **AWS Account:**  You'll need an AWS account with permissions to create and manage S3 buckets, CloudFront distributions, and IAM roles.
-   **AWS CLI:**  The AWS Command Line Interface is recommended for interacting with AWS services.
-   **Domain Name (Optional):**  If you want to use a custom domain (e.g.,  `[tatenda.xyz](http://www.yourname.com/)`), you'll need to own and manage the domain registration.

**Deployment Instructions**  

  **Clone the Repository:**
 
 - `git clone <your-repository-url>`

- `cd.  <repository-name>`

.  **Deploy with AWS CLI:**

    -  aws cloudformation deploy --template-file serverless-website.yaml --stack-name your-website

 **Verify Deployment:**  After deployment, AWS CloudFormation will output the CloudFront domain name. Use it to access your website.

**Configuration (Optional)**  

-   **Custom Domain:**  Follow the steps in the CloudFront documentation to associate your custom domain with the distribution.
-   **Additional Content:**  Upload your website files (HTML, CSS, images, etc.) to the S3 bucket.

**Caveats**  

-   **Cost:**  While the architecture is serverless, standard AWS charges for S3 storage, CloudFront data transfer, and requests still apply.
-   **SSL Certificates:**  If using a custom domain, you'll need to manage the SSL certificate through AWS Certificate Manager (ACM).
