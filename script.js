// script.js

// ─── Question Data ─────────────────────────────────────────────────────────
const questions = [
  {
    "question": "You are using a single Cloud SQL instance to serve your application from a specific zone. You want to introduce high availability. \n\nWhat should you do?",
    "options": [
      "Create a read replica instance in a different region",
      "Create a failover replica instance in a different region",
      "Create a read replica instance in the same region, but in a different zone",
      "Create a failover replica instance in the same region, but in a different zone"
    ],
    "answer": [
      "Create a failover replica instance in the same region, but in a different zone"
    ],
    "multiple": false
  },
  {
    "question": "Your company is running a stateless application on a Compute Engine instance. The application is used heavily during regular business hours and lightly outside of business hours. Users are reporting that the application is slow during peak hours. You need to optimize the application's performance. \n\nWhat should you do?",
    "options": [
      "Create a snapshot of the existing disk. Create an instance template from the snapshot. Create an autoscaled managed instance group from the instance template.",
      "Create a snapshot of the existing disk. Create a custom image from the snapshot. Create an autoscaled managed instance group from the custom image.",
      "Create a custom image from the existing disk. Create an instance template from the custom image. Create an autoscaled managed instance group from the instance template.",
      "Create an instance template from the existing disk. Create a custom image from the instance template. Create an autoscaled managed instance group from the custom image."
    ],
    "answer": [
      "Create a custom image from the existing disk. Create an instance template from the custom image. Create an autoscaled managed instance group from the instance template."
    ],
    "multiple": false
  },
  {
    "question": "Your web application has several VM instances running within a VPYou want to restrict communications between instances to only the paths and ports you authorize, but you don't want to rely on static IP addresses or subnets because the app can autoscale. \n\nHow should you restrict communications?",
    "options": [
      "Use separate VPCs to restrict traffic",
      "Use firewall rules based on network tags attached to the compute instances",
      "Use Cloud DNS and only allow connections from authorized hostnames",
      "Use service accounts and configure the web application to authorize particular service accounts to have access"
    ],
    "answer": [
      "Use firewall rules based on network tags attached to the compute instances"
    ],
    "multiple": false
  },
  {
    "question": "You are using Cloud SQL as the database backend for a large CRM deployment. You want to scale as usage increases and ensure that you don't run out of storage, maintain 75% CPU usage cores, and keep replication lag below 60 seconds. \n\nWhat are the correct steps to meet your requirements?",
    "options": [
      "1. Enable automatic storage increase for the instance. 2. Create a Stackdriver alert when CPU usage exceeds 75%, and change the instance type to reduce CPU usage. 3. Create a Stackdriver alert for replication lag, and shard the database to reduce replication time.",
      "1. Enable automatic storage increase for the instance. 2. Change the instance type to a 32-core machine type to keep CPU usage below 75%. 3. Create a Stackdriver alert for replication lag, and deploy memcache to reduce load on the master.",
      "1. Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. 2. Deploy memcached to reduce CPU load. 3. Change the instance type to a 32-core machine type to reduce replication lag.",
      "1. Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. 2. Deploy memcached to reduce CPU load. 3. Create a Stackdriver alert for replication lag, and change the instance type to a 32-core machine type to reduce replication lag."
    ],
    "answer": [
      "1. Enable automatic storage increase for the instance. 2. Create a Stackdriver alert when CPU usage exceeds 75%, and change the instance type to reduce CPU usage. 3. Create a Stackdriver alert for replication lag, and shard the database to reduce replication time."
    ],
    "multiple": false
  },
  {
    "question": "You are tasked with building an online analytical processing (OLAP) marketing analytics and reporting tool. This requires a relational database that can operate on hundreds of terabytes of data. \n\nWhat is the Google-recommended tool for such applications?",
    "options": [
      "Cloud Spanner, because it is globally distributed",
      "Cloud SQL, because it is a fully managed relational database",
      "Cloud Firestore, because it offers real-time synchronization across devices",
      "BigQuery, because it is designed for large-scale processing of tabular data"
    ],
    "answer": [
      "BigQuery, because it is designed for large-scale processing of tabular data"
    ],
    "multiple": false
  },
  {
    "question": "You have deployed an application to Google Kubernetes Engine (GKE), and are using the Cloud SQL proxy container to make the Cloud SQL database available to the services running on Kubernetes. You are notified that the application is reporting database connection issues. Your company policies require a post- mortem. \n\nWhat should you do?",
    "options": [
      "Use gcloud sql instances restart.",
      "Validate that the Service Account used by the Cloud SQL proxy container still has the Cloud Build Editor role.",
      "In the GCP Console, navigate to Stackdriver Logging. Consult logs for (GKE) and Cloud SQL.",
      "In the GCP Console, navigate to Cloud SQL. Restore the latest backup. Use kubectl to restart all pods."
    ],
    "answer": [
      "In the GCP Console, navigate to Stackdriver Logging. Consult logs for (GKE) and Cloud SQL."
    ],
    "multiple": false
  },
  {
    "question": "Your company pushes batches of sensitive transaction data from its application server VMs to Cloud Pub/Sub for processing and storage. \n\nWhat is the Google- recommended way for your application to authenticate to the required Google Cloud services?",
    "options": [
      "Ensure that VM service accounts are granted the appropriate Cloud Pub/Sub IAM roles.",
      "Ensure that VM service accounts do not have access to Cloud Pub/Sub, and use VM access scopes to grant the appropriate Cloud Pub/Sub IAM roles.",
      "Generate an OAuth2 access token for accessing Cloud Pub/Sub, encrypt it, and store it in Cloud Storage for access from each VM.",
      "Create a gateway to Cloud Pub/Sub using a Cloud Function, and grant the Cloud Function service account the appropriate Cloud Pub/Sub IAM roles."
    ],
    "answer": [
      "Ensure that VM service accounts are granted the appropriate Cloud Pub/Sub IAM roles."
    ],
    "multiple": false
  },
  {
    "question": "You want to establish a Compute Engine application in a single VPC across two regions. The application must communicate over VPN to an on-premises network.\n\nHow should you deploy the VPN?",
    "options": [
      "Use VPC Network Peering between the VPC and the on-premises network.",
      "Expose the VPC to the on-premises network using IAM and VPC Sharing.",
      "Create a global Cloud VPN Gateway with VPN tunnels from each region to the on-premises peer gateway.",
      "Deploy Cloud VPN Gateway in each region. Ensure that each region has at least one VPN tunnel to the on-premises peer gateway."
    ],
    "answer": [
      "Deploy Cloud VPN Gateway in each region. Ensure that each region has at least one VPN tunnel to the on-premises peer gateway."
    ],
    "multiple": false
  },
  {
    "question": "Your applications will be writing their logs to BigQuery for analysis. Each application should have its own table. Any logs older than 45 days should be removed.\nYou want to optimize storage and follow Google-recommended practices. \n\nWhat should you do?",
    "options": [
      "Configure the expiration time for your tables at 45 days",
      "Make the tables time-partitioned, and configure the partition expiration at 45 days",
      "Rely on BigQuery's default behavior to prune application logs older than 45 days",
      "Create a script that uses the BigQuery command line tool (bq) to remove records older than 45 days"
    ],
    "answer": [
      "Make the tables time-partitioned, and configure the partition expiration at 45 days"
    ],
    "multiple": false
  },
  {
    "question": "You want your Google Kubernetes Engine cluster to automatically add or remove nodes based on CPU load.\n\nWhat should you do?",
    "options": [
      "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable the Cluster Autoscaler from the GCP Console.",
      "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable autoscaling on the managed instance group for the cluster using the gcloud command.",
      "Create a deployment and set the maxUnavailable and maxSurge properties. Enable the Cluster Autoscaler using the gcloud command.",
      "Create a deployment and set the maxUnavailable and maxSurge properties. Enable autoscaling on the cluster managed instance group from the GCP Console."
    ],
    "answer": [
      "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable the Cluster Autoscaler from the GCP Console."
    ],
    "multiple": false
  },
  {
    "question": "You need to develop procedures to verify resilience of disaster recovery for remote recovery using GCP. Your production environment is hosted on-premises. You need to establish a secure, redundant connection between your on-premises network and the GCP network.\n\nWhat should you do?",
    "options": [
      "Verify that Dedicated Interconnect can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if Dedicated Interconnect fails.",
      "Verify that Dedicated Interconnect can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if Dedicated Interconnect fails.",
      "Verify that the Transfer Appliance can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if the Transfer Appliance fails.",
      "Verify that the Transfer Appliance can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if the Transfer Appliance fails."
    ],
    "answer": [
      "Verify that Dedicated Interconnect can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if Dedicated Interconnect fails."
    ],
    "multiple": false
  },
  {
    "question": "Your company operates nationally and plans to use GCP for multiple batch workloads, including some that are not time-critical. You also need to use GCP services that are HIPAA-certified and manage service costs.\n\nHow should you design to meet Google best practices?",
    "options": [
      "Provision preemptible VMs to reduce cost. Discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      "Provision preemptible VMs to reduce cost. Disable and then discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      "Provision standard VMs in the same region to reduce cost. Discontinue use of all GCP services and APIs that are not HIPAA-compliant.",
      "Provision standard VMs to the same region to reduce cost. Disable and then discontinue use of all GCP services and APIs that are not HIPAA-compliant."
    ],
    "answer": [
      "Provision preemptible VMs to reduce cost. Disable and then discontinue use of all GCP services and APIs that are not HIPAA-compliant."
    ],
    "multiple": false
  },
  {
    "question": "Your customer wants to do resilience testing of their authentication layer. This consists of a regional managed instance group serving a public REST API that reads from and writes to a Cloud SQL instance.\n\nWhat should you do?",
    "options": [
      "Engage with a security company to run web scrapers that look your for users' authentication data om malicious websites and notify you if any is found.",
      "Deploy intrusion detection software to your virtual machines to detect and log unauthorized access.",
      "Schedule a disaster simulation exercise during which you can shut off all VMs in a zone to see how your application behaves.",
      "Configure a read replica for your Cloud SQL instance in a different zone than the master, and then manually trigger a failover while monitoring KPIs for our REST API."
    ],
    "answer": [
      "Schedule a disaster simulation exercise during which you can shut off all VMs in a zone to see how your application behaves."
    ],
    "multiple": false
  },
  {
    "question": "Your BigQuery project has several users. For audit purposes, you need to see how many queries each user ran in the last month. \n\nWhat should you do?",
    "options": [
      "Connect Google Data Studio to BigQuery. Create a dimension for the users and a metric for the amount of queries per user.",
      "In the BigQuery interface, execute a query on the JOBS table to get the required information.",
      "Use 'bq show' to list all jobs. Per job, use 'bq ls' to list job information and get the required information.",
      "Use Cloud Audit Logging to view Cloud Audit Logs, and create a filter on the query operation to get the required information."
    ],
    "answer": [
      "Use Cloud Audit Logging to view Cloud Audit Logs, and create a filter on the query operation to get the required information."
    ],
    "multiple": false
  },
  {
    "question": "You want to automate the creation of a managed instance group. The VMs have many OS package dependencies. You want to minimize the startup time for new VMs in the instance group.\n\nWhat should you do?",
    "options": [
      "Use Terraform to create the managed instance group and a startup script to install the OS package dependencies.",
      "Create a custom VM image with all OS package dependencies. Use Deployment Manager to create the managed instance group with the VM image.",
      "Use Puppet to create the managed instance group and install the OS package dependencies.",
      "Use Deployment Manager to create the managed instance group and Ansible to install the OS package dependencies."
    ],
    "answer": [
      "Create a custom VM image with all OS package dependencies. Use Deployment Manager to create the managed instance group with the VM image."
    ],
    "multiple": false
  },
  {
    "question": "Your company captures all web traffic data in Google Analytics 360 and stores it in BigQuery. Each country has its own dataset. Each dataset has multiple tables. You want analysts from each country to be able to see and query only the data for their respective countries.\n\nHow should you configure the access rights?",
    "options": [
      "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate dataset with view access with each respective analyst country-group.",
      "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate tables with view access with each respective analyst country-group.",
      "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate dataset with view access with each respective analyst country- group.",
      "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate table with view access with each respective analyst country-group."
    ],
    "answer": [
      "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate dataset with view access with each respective analyst country-group."
    ],
    "multiple": false
  },
  {
    "question": "You have been engaged by your client to lead the migration of their application infrastructure to GCP. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads that are identified as follows: 20 TB of log archives retained for legal reasons; 500 GB of VM boot/data volumes and templates; 500 GB of image thumbnails; 200 GB of customer session state data that allows customers to restart sessions even if off-line for several days.\n\nWhich of the following best reflects your recommendations for a cost-effective storage allocation?",
    "options": [
      "Local SSD for customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
      "Memcache backed by Cloud Datastore for the customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
      "Memcache backed by Cloud SQL for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails.",
      "Memcache backed by Persistent Disk SSD storage for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails."
    ],
    "answer": [
      "Memcache backed by Cloud Datastore for the customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes."
    ],
    "multiple": false
  },
  {
    "question": "Your web application uses Google Kubernetes Engine to manage several workloads. One workload requires a consistent set of hostnames even after pod scaling and relaunches.\n\nWhich feature of Kubernetes should you use to accomplish this?",
    "options": [
      "StatefulSets",
      "Role-based access control",
      "Container environment variables",
      "Persistent Volumes"
    ],
    "answer": [
      "StatefulSets"
    ],
    "multiple": false
  },
  {
    "question": "You are using Cloud CDN to deliver static HTTP(S) website content hosted on a Compute Engine instance group. You want to improve the cache hit ratio.\n\nWhat should you do?",
    "options": [
      "Customize the cache keys to omit the protocol from the key.",
      "Shorten the expiration time of the cached objects.",
      "Make sure the HTTP(S) header ג€Cache-Regionג€ points to the closest region of your users.",
      "Replicate the static content in a Cloud Storage bucket. Point CloudCDN toward a load balancer on that bucket."
    ],
    "answer": [
      "Customize the cache keys to omit the protocol from the key."
    ],
    "multiple": false
  },
  {
    "question": "Your architecture calls for the centralized collection of all admin activity and VM system logs within your project.\n\nHow should you collect these logs from both VMs and services?",
    "options": [
      "All admin and VM system logs are automatically collected by Stackdriver.",
      "Stackdriver automatically collects admin activity logs for most services. The Stackdriver Logging agent must be installed on each instance to collect system logs.",
      "Launch a custom syslogd compute instance and configure your GCP project and VMs to forward all logs to it.",
      "Install the Stackdriver Logging agent on a single compute instance and let it collect all audit and access logs for your environment."
    ],
    "answer": [
      "Stackdriver automatically collects admin activity logs for most services. The Stackdriver Logging agent must be installed on each instance to collect system logs."
    ],
    "multiple": false
  },
  {
    "question": "You have an App Engine application that needs to be updated. You want to test the update with production traffic before replacing the current application version.\n\nWhat should you do?",
    "options": [
      "Deploy the update using the Instance Group Updater to create a partial rollout, which allows for canary testing.",
      "Deploy the update as a new version in the App Engine application, and split traffic between the new and current versions.",
      "Deploy the update in a new VPC, and use Google's global HTTP load balancing to split traffic between the update and current applications.",
      "Deploy the update as a new App Engine application, and use Google's global HTTP load balancing to split traffic between the new and current applications."
    ],
    "answer": [
      "Deploy the update as a new version in the App Engine application, and split traffic between the new and current versions."
    ],
    "multiple": false
  },
  {
    "question": "All Compute Engine instances in your VPC should be able to connect to an Active Directory server on specific ports. Any other traffic emerging from your instances is not allowed. You want to enforce this using VPC firewall rules.\n\nHow should you configure the firewall rules?",
    "options": [
      "Create an egress rule with priority 1000 to deny all traffic for all instances. Create another egress rule with priority 100 to allow the Active Directory traffic for all instances.",
      "Create an egress rule with priority 100 to deny all traffic for all instances. Create another egress rule with priority 1000 to allow the Active Directory traffic for all instances.",
      "Create an egress rule with priority 1000 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 100 to block all traffic for all instances.",
      "Create an egress rule with priority 100 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 1000 to block all traffic for all instances."
    ],
    "answer": [
      "Create an egress rule with priority 1000 to deny all traffic for all instances. Create another egress rule with priority 100 to allow the Active Directory traffic for all instances."
    ],
    "multiple": false
  },
  {
    "question": "Your customer runs a web service used by e-commerce sites to offer product recommendations to users. The company has begun experimenting with a machine learning model on Google Cloud Platform to improve the quality of results.\n\nWhat should the customer do to improve their model's results over time?",
    "options": [
      "Export Cloud Machine Learning Engine performance metrics from Stackdriver to BigQuery, to be used to analyze the efficiency of the model.",
      "Build a roadmap to move the machine learning model training from Cloud GPUs to Cloud TPUs, which offer better results.",
      "Monitor Compute Engine announcements for availability of newer CPU architectures, and deploy the model to them as soon as they are available for additional performance.",
      "Save a history of recommendations and results of the recommendations in BigQuery, to be used as training data."
    ],
    "answer": [
      "Save a history of recommendations and results of the recommendations in BigQuery, to be used as training data."
    ],
    "multiple": false
  },
  {
    "question": "A development team at your company has created a dockerized HTTPS web application. You need to deploy the application on Google Kubernetes Engine (GKE) and make sure that the application scales automatically.\n\nHow should you deploy to GKE?",
    "options": [
      "Use the Horizontal Pod Autoscaler and enable cluster autoscaling. Use an Ingress resource to load-balance the HTTPS traffic.",
      "Use the Horizontal Pod Autoscaler and enable cluster autoscaling on the Kubernetes cluster. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic.",
      "Enable autoscaling on the Compute Engine instance group. Use an Ingress resource to load-balance the HTTPS traffic.",
      "Enable autoscaling on the Compute Engine instance group. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic."
    ],
    "answer": [
      "Use the Horizontal Pod Autoscaler and enable cluster autoscaling. Use an Ingress resource to load-balance the HTTPS traffic."
    ],
    "multiple": false
  },
  {
    "question": "You need to design a solution for global load balancing based on the URL path being requested. You need to ensure operations reliability and end-to-end in- transit encryption based on Google best practices.\n\nWhat should you do?",
    "options": [
      "Create a cross-region load balancer with URL Maps.",
      "Create an HTTPS load balancer with URL Maps.",
      "Create appropriate instance groups and instances. Configure SSL proxy load balancing.",
      "Create a global forwarding rule. Configure SSL proxy load balancing."
    ],
    "answer": [
      "Create an HTTPS load balancer with URL Maps."
    ],
    "multiple": false
  },
  {
    "question": "You have an application that makes HTTP requests to Cloud Storage. Occasionally the requests fail with HTTP status codes of 5xx and 429.\n\nHow should you handle these types of errors?",
    "options": [
      "Use gRPC instead of HTTP for better performance.",
      "Implement retry logic using a truncated exponential backoff strategy.",
      "Make sure the Cloud Storage bucket is multi-regional for geo-redundancy.",
      "Monitor https://status.cloud.google.com/feed.atom and only make requests if Cloud Storage is not reporting an incident."
    ],
    "answer": [
      "Implement retry logic using a truncated exponential backoff strategy."
    ],
    "multiple": false
  },
  {
    "question": "You need to develop procedures to test a disaster plan for a mission-critical application. You want to use Google-recommended practices and native capabilities within GCP.\n\nWhat should you do?",
    "options": [
      "Use Deployment Manager to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
      "Use Deployment Manager to automate service provisioning. Use Stackdriver to monitor and debug your tests.",
      "Use gcloud scripts to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
      "Use gcloud scripts to automate service provisioning. Use Stackdriver to monitor and debug your tests."
    ],
    "answer": [
      "Use Deployment Manager to automate service provisioning. Use Stackdriver to monitor and debug your tests."
    ],
    "multiple": false
  },
  {
    "question": "Your company creates rendering software which users can download from the company website. Your company has customers all over the world. You want to minimize latency for all your customers. You want to follow Google-recommended practices.\n\nHow should you store the files?",
    "options": [
      "Save the files in a Multi-Regional Cloud Storage bucket.",
      "Save the files in a Regional Cloud Storage bucket, one bucket per zone of the region.",
      "Save the files in multiple Regional Cloud Storage buckets, one bucket per zone per region.",
      "Save the files in multiple Multi-Regional Cloud Storage buckets, one bucket per multi-region."
    ],
    "answer": [
      "Save the files in multiple Multi-Regional Cloud Storage buckets, one bucket per multi-region."
    ],
    "multiple": false
  },
  {
    "question": "Your company acquired a healthcare startup and must retain its customers' medical information for up to 4 more years, depending on when it was created. Your corporate policy is to securely retain this data, and then delete it as soon as regulations allow.\n\nWhich approach should you take?",
    "options": [
      "Store the data in Google Drive and manually delete records as they expire.",
      "Anonymize the data using the Cloud Data Loss Prevention API and store it indefinitely.",
      "Store the data in Cloud Storage and use lifecycle management to delete files when they expire.",
      "Store the data in Cloud Storage and run a nightly batch script that deletes all expired data."
    ],
    "answer": [
      "Store the data in Cloud Storage and use lifecycle management to delete files when they expire."
    ],
    "multiple": false
  },
  {
    "question": "You are deploying a PHP App Engine Standard service with Cloud SQL as the backend. You want to minimize the number of queries to the database.\n\nWhat should you do?",
    "options": [
      "Set the memcache service level to dedicated. Create a key from the hash of the query, and return database values from memcache before issuing a query to Cloud SQL.",
      "Set the memcache service level to dedicated. Create a cron task that runs every minute to populate the cache with keys containing query results.",
      "Set the memcache service level to shared. Create a cron task that runs every minute to save all expected queries to a key called ג€cached_queriesג€.",
      "Set the memcache service level to shared. Create a key called ג€cached_queriesג€, and return database values from the key before using a query to Cloud SQL."
    ],
    "answer": [
      "Set the memcache service level to dedicated. Create a key from the hash of the query, and return database values from memcache before issuing a query to Cloud SQL."
    ],
    "multiple": false
  },
  {
    "question": "You need to ensure reliability for your application and operations by supporting reliable task scheduling for compute on GCP. \n\nLeveraging Google best practices, what should you do?",
    "options": [
      "Using the Cron service provided by App Engine, publish messages directly to a message-processing utility service running on Compute Engine instances.",
      "Using the Cron service provided by App Engine, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances.",
      "Using the Cron service provided by Google Kubernetes Engine (GKE), publish messages directly to a message-processing utility service running on Compute Engine instances.",
      "Using the Cron service provided by GKE, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances."
    ],
    "answer": [
      "Using the Cron service provided by App Engine, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances."
    ],
    "multiple": false
  }
];

questions.sort(() => Math.random() - 0.5);

// ─── State & DOM References ───────────────────────────────────────────────────
let currentQuestion   = 0;
let score             = 0;
let showingFeedback   = false;
let quizStartTime     = new Date();
let totalTimeSeconds  = 90 * 60;
let countdownInterval = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("nextBtn");
const finishBtn  = document.getElementById("finishTestBtn");
const resultEl   = document.getElementById("result");
const timerEl    = document.getElementById("timer");

// ─── Utility Functions ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str
    .replace(/\\/g, "")     // remove all backslashes
    .replace(/\s+/g, " ")   // collapse whitespace/newlines into single spaces
    .trim();
}

function updateProgress() {
  const pct = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── Render Question ─────────────────────────────────────────────────────────
function loadQuestion() {
  showingFeedback    = false;
  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  const q         = questions[currentQuestion];
  const shuffled  = shuffleArray([...q.options]);
  const inputType = q.multiple ? "checkbox" : "radio";

  // break the question into lines, render any image-URL as an <img>
  const html = q.question
    .split('\n')
    .map(line => {
      const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
      if (m) {
        return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
      }
      // otherwise escape & wrap in a paragraph
      return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    })
    .join('');
  questionEl.innerHTML = html;
  optionsEl.innerHTML    = "";

  shuffled.forEach(option => {
    const li    = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'option';
  
    const input = document.createElement('input');
    input.type  = inputType;
    input.name  = 'option';
    input.value = option;
  
    const span = document.createElement('span');
    if (option.match(/\.(jpe?g|png|gif|webp)$/i)) {
      const img = document.createElement('img');
      img.src    = option;
      img.alt    = 'Option image';
      img.style.maxWidth = '100%';
      img.style.height   = 'auto';
      span.appendChild(img);
    } else {
      span.textContent = option;
    }
  
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
    });
  
    label.append(input, span);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });


  // wire up the “selected” highlight
  optionsEl.querySelectorAll(`input[name="option"]`).forEach(input => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      input.parentElement.classList.add("selected");
    });
  });

  updateProgress();
  finishBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}



// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(totalTimeSeconds / 3600);
  const m = Math.floor((totalTimeSeconds % 3600) / 60);
  const s = totalTimeSeconds % 60;

  let parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);

  timerEl.textContent = `Time Remaining: ${parts.join(" ")}`;
  totalTimeSeconds--;

  if (totalTimeSeconds < 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}

function startTimer() {
  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// ─── Submission & Feedback ───────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  const currentQ       = questions[currentQuestion];
  const selectedInputs = Array.from(
    document.querySelectorAll("input[name='option']:checked")
  );

  if (!showingFeedback) {
    if (selectedInputs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Normalize selected vs. correct
    const selectedNorm = selectedInputs.map(i => normalize(i.value));
    const correctNorm  = currentQ.answer.map(a => normalize(a));

    const isCorrect =
      selectedNorm.length === correctNorm.length &&
      correctNorm.every(ans => selectedNorm.includes(ans));

    const selectedRaw = selectedInputs.map(input => input.value); // preserve original formatting
      userAnswers[currentQuestion] = {
        selected: selectedRaw,
        correct: currentQ.answer,
        question: currentQ.question,
        explanation: currentQ.explanation
      };


    // Disable & highlight in one pass
    optionsEl.querySelectorAll("input[name='option']").forEach(input => {
      input.disabled = true;
      const valNorm = normalize(input.value);
      const lbl     = input.parentElement;

      if (correctNorm.includes(valNorm))       lbl.classList.add("correct");
      else if (input.checked)                  lbl.classList.add("incorrect");
    });

    // Show feedback message
    resultEl.innerHTML = isCorrect
      ? `<p style="color:green;">✅ Correct!</p>`
      : `<p style="color:red;">❌ Incorrect.</p>
         <p>Correct Answer:<br><strong>${currentQ.answer.join("<br>")}</strong></p>`;
    
    
    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    
    if (isCorrect) score++;
    showingFeedback     = true;
    nextBtn.textContent = (currentQuestion < questions.length - 1)
      ? "Next Question"
      : "See Result";

  } else {
    // Move to next question or finish
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const duration = formatDuration(Math.floor((endTime - quizStartTime) / 1000));

  const record = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  history.push(record);
  localStorage.setItem("quizScoreHistory", JSON.stringify(history));
}

function displayScoreHistory() {
  const container = document.querySelector(".container");
  const historyDiv = document.getElementById("scoreHistory");
  if (historyDiv) historyDiv.remove();

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  if (history.length === 0) return;

  const div = document.createElement("div");
  div.id = "scoreHistory";
  div.style.display = "none";
  div.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr><th>#</th><th>Score</th><th>Time Taken</th><th>Date</th></tr>
      </thead>
      <tbody>
        ${history.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.score} / ${r.total}</td>
            <td>${r.duration}</td>
            <td>${r.date}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    
    <div style="margin-top: 10px;">
      <button id="clearHistoryBtn">Clear History</button>
      <button id="restartFromHistoryBtn" style="margin-left: 10px;">Restart Quiz</button>
    </div>
    <hr>
  `;
  container.insertBefore(div, document.getElementById("quiz"));

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Clear all score history?")) {
      localStorage.removeItem("quizScoreHistory");
      displayScoreHistory();
    }
  });

  document.getElementById('restartFromHistoryBtn').addEventListener('click', () => {
    if (confirm("Do you want to restart the quiz?")) {
      // Reset quiz state
      score = 0;
      currentQuestion = 0;
      showingFeedback = false;
      quizStartTime = new Date();
  
      // Reset timer
      clearInterval(countdownInterval);
      totalTimeSeconds = 90 * 60; // reset to your default duration
      updateTimerDisplay();
      startTimer();

      // Hide score history section
      const historySection = document.getElementById("scoreHistory");
      if (historySection) historySection.style.display = "none";
  
      // Shuffle and reload quiz
      questions.sort(() => Math.random() - 0.5);
      document.getElementById("quiz").style.display = "block";
      document.getElementById("finalResult").style.display = "none";
      const summary = document.getElementById("summaryPage");
      if (summary) summary.style.display = "none";
  
      loadQuestion();
    }
  });

}


// Helper functions:

function renderAnswerHTML(answers) {
  return answers.map(ans => {
    if (ans.match(/\.(jpe?g|png|gif|webp)$/i)) {
      return `<img src="${ans}" alt="Answer image" style="max-width:100%;height:auto;margin:6px 0;">`;
    }
    return `<p>${ans}</p>`;
  }).join("");
}

function renderQuestionHTML(text) {
  return text.split('\n').map(line => {
    const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
    if (m) {
      return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
    }
    return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
  }).join('');
}


// ─── Show Result & Restart ───────────────────────────────────────────────────
function showResult() {
  clearInterval(countdownInterval);
  saveScoreToHistory(score, questions.length);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
  `;
  finishBtn.style.display = "none";

  displayScoreHistory();
  document.getElementById("scoreHistory").style.display = "block";

  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    clearInterval(countdownInterval);
    totalTimeSeconds = 90 * 60;
    startTimer();

    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });

  const summaryDiv = document.getElementById("summaryPage");
  summaryDiv.innerHTML = "<h3>Question Summary</h3>";

  userAnswers.forEach((entry, index) => {
    const isCorrect =
      entry.selected.length === entry.correct.length &&
      entry.correct.every(ans => entry.selected.includes(ans));

    const explanationHTML = entry.explanation
      ? `<p><strong>Explanation:</strong><br>${entry.explanation}</p>`
      : "";

    const questionHTML = `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 12px;">
        <p><strong>Q${index + 1}:</strong></p>
        ${renderQuestionHTML(entry.question)}
        <p><strong>Your Answer:</strong><br>${renderAnswerHTML(entry.selected)}</p>
        <p><strong>Correct Answer:</strong><br>${renderAnswerHTML(entry.correct)}</p>
        <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
        ${explanationHTML}
      </div>
    `;

    summaryDiv.innerHTML += questionHTML;
  });

    
    // Hide quiz and show summary
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreHistory").style.display = "block";
    summaryDiv.style.display = "block";

}


// ─── Bootstrap ───────────────────────────────────────────────────────────────

finishBtn.style.display = "none";
loadQuestion();
startTimer();
