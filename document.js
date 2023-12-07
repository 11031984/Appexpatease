const container = document.querySelector(".container");
const services = [
  {
    name: "Services for Expat",
    image:
      "https://www.hlb.global/wp-content/uploads/2022/01/hlb-expatriate-tax-services_upload-1.jpg",
    link: "https://example.com/perspiciatis"
  },
  {
    name: "Customized Relocation Checklist",
    image:
      "https://www.hco.com/hs-fs/hubfs/Expatriate-Tax-Services-usa-hco.jpg?width=950&height=548&name=Expatriate-Tax-Services-usa-hco.jpg",
    link: "https://example.com/checklist"
  },
  {
    name: "Community Integration",
    image: "https://www.taxback.com/resources/image/expatriate_topimage.jpg",
    link: "https://example.com/community"
  },
  {
    name: "Legal and Administrative Guidance",
    image:
      "https://www.expattaxes.com.au/wp-content/uploads/2018/07/returning_home.jpg",
    link: "https://example.com/legal"
  },
  {
    name: "Housing Assistance",
    image:
      "https://static.theceomagazine.net/wp-content/uploads/2023/01/05110108/expat.jpg",
    link: "https://example.com/housing"
  },
  {
    name: "Cultural and Language Resources",
    image:
      "https://www.expertsforexpats.com/assets/Uploads/what-is-an-expat.jpg",
    link: "https://example.com/cultural"
  },
  {
    name: "Healthcare Navigation",
    image:
      "https://366e203a.rocketcdn.me/wp-content/uploads/2023/08/Health-Care-Index.jpg",
    link: "https://example.com/healthcare"
  },
  {
    name: "Job Search Assistance",
    image:
      "https://media.licdn.com/dms/image/D5612AQGV8PpOYgiUNg/article-cover_image-shrink_720_1280/0/1674674392807?e=2147483647&v=beta&t=Am7bi3P3YoMM60bq_9mUCdO2pCIfdaEk8hGhNawuBc8",
    link: "https://example.com/jobsearch"
  },
  {
    name: "Emergency Support",
    image:
      "https://aviationmanuals.com/wp-content/uploads/2020/05/Post-Pandemic_ERP_article_header.jpg",
    link: "https://example.com/emergency"
  }
];

const showservices = () => {
  let output = "";
  const buttonColors = [
    "#CD6621",
    "#D77E9C",
    "#73737F",
    "#D1E3EA",
    "#7199B4",
    "#141E30",
    "#2D3D54",
    "#424894",
    "#5733ff"
  ];

  services.forEach(({ name, image, link }, index) => {
    const buttonColor = buttonColors[index]; // Get color based on the index
    output += `
      <div class="card">
        <img class="card--avatar" src=${image} alt="${name}" />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="${link}" target="_blank" style="background-color: ${buttonColor}">Apply</a>
      </div>
    `;
  });
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showservices);

const staticDevexpat = "dev-expat-site-v1"; // Corrected variable name
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/main.js",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg"
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevexpat).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((res) => console.log("Service worker registered"))
      .catch((err) => console.log("Service worker registration failed", err));
  });
}

