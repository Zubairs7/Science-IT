const schemes = [
    
        {
            "name": "Karnataka Digital Economy Mission (KDEM)",
            "description": "Aims to increase the state's digital economy contribution to 30% of GSDP by 2025 through various initiatives and policies.",
            "link": "https://karnatakadigital.in/",
            "type": "state"
        },
        {
            "name": "Karnataka DST-Ph.D. Fellowship for Science and Engineering",
            "description": "Provides financial support to Ph.D. students in science and engineering disciplines to encourage advanced research.",
            "link": "https://ksteps.karnataka.gov.in/storage/pdf-files/GeneralGuidelines_Termsandcondition_Annexuresfinal.pdf",
            "type": "state"
        },
        {
            "name": "Student Projects Programme (SPP)",
            "description": "Encourages undergraduate and postgraduate students to undertake projects addressing real-life problems, fostering innovation and practical skills.",
            "link": "https://kscst.org.in/spp.html",
            "type": "state"
        },
        {
            "name": "Small Grants Scheme/Short Term Studies",
            "description": "Offers financial assistance for short-term research studies and projects in science and technology fields.",
            "link": "https://kstacademy.in/en/small-grants-scheme-short-term-studies/",
            "type": "state"
        },
        {
            "name": "Karnataka Science and Technology Academy (KSTA)",
            "description": "Organizes programs and conferences to promote scientific awareness and popularize science among the general public.",
            "link": "https://kstacademy.in/",
            "type": "state"
        },
        {
            "name": "Karnataka Innovation and Technology Society (KITS)",
            "description": "Facilitates and promotes IT, biotechnology, electronics, and related sectors through various initiatives and support systems.",
            "link": "https://k-tech.karnataka.gov.in/",
            "type": "state"
        },
        {
            "name": "Vision Group on Science and Technology (VGST)",
            "description": "Advises on science and technology programs, aiming to encourage and promote education and research in these fields.",
            "link": "https://vgstdst.karnataka.gov.in/en",
            "type": "state"
        },
        {
            "name": "Karnataka IT Policy 2020-2025",
            "description": "Seeks to foster innovation, support startups, and enhance digital inclusivity, positioning the state as a leading IT hub.",
            "link": "https://eitbt.karnataka.gov.in/it/public/policy/en",
            "type": "state"
        },
        {
            "name": "Karnataka Cyber Security Policy 2024",
            "description": "Introduces measures to combat rising cybercrimes and promote awareness, skill-building, and technology integration to protect the state's digital infrastructure.",
            "link": "https://ciso.economictimes.indiatimes.com/news/grc/karnataka-govt-launches-new-cyber-security-policy/112214121",
            "type": "state"
        },
        {
            "name": "Karnataka Engineering Research and Development Policy 2021",
            "description": "Aims to position Karnataka as a global hub for engineering, research, and development by providing incentives and support to the sector.",
            "link": "https://www.missionstartupkarnataka.org/policies",
            "type": "state"
        },
        {
            "name": "Karnataka Innovation and Technology Society (KITS)",
            "description": "Facilitates and promotes IT, biotechnology, electronics, and related sectors through various initiatives and support systems.",
            "link": "https://k-tech.karnataka.gov.in/",
            "type": "state"
        },
        {
            "name": "Karnataka Startup Policy 2022-2027",
            "description": "Aims to promote Bangalore and Karnataka as the ultimate startup destination in the world by providing support and incentives to startups.",
            "link": "https://www.missionstartupkarnataka.org/policies",
            "type": "state"
        },
        {
            "name": "Digital India Programme",
            "description": "Aims to transform India into a digitally empowered society and knowledge economy by providing digital infrastructure, governance, and services.",
            "link": "https://digitalindia.gov.in/",
            "type": "central"
        },
        {
            "name": "National Supercomputing Mission (NSM)",
            "description": "Seeks to build a network of supercomputers in India to support scientific research and innovation.",
            "link": "https://www.nsmindia.in/",
            "type": "central"
        },
        {
            "name": "Karnataka State Council for Science and Technology (KSCST)",
            "description": "Implements S&T-based solutions to local needs and supports the state government in formulating S&T-based policies.",
            "link": "https://dst.gov.in/kscst-implements-st-based-solutions-locale-needs",
            "type": "state"
        },
        {
            "name": "Software Technology Parks of India (STPI) - Bengaluru",
            "description": "Provides infrastructure and support for software export and development, promoting the IT industry in Karnataka.",
            "link": "https://bengaluru.stpi.in/en",
            "type": "state"
        },
        {
            "name": "Startup India",
            "description": "Promotes innovation and entrepreneurship by providing financial support, mentoring, and tax benefits to startups.",
            "link": "https://www.startupindia.gov.in/",
            "type": "central"
        },
        {
            "name": "Atal Innovation Mission (AIM)",
            "description": "Encourages innovation and entrepreneurship through initiatives like Atal Tinkering Labs and Atal Incubation Centers.",
            "link": "https://aim.gov.in/",
            "type": "central"
        },
        {
            "name": "National Science & Technology Entrepreneurship Development Board (NSTEDB)",
            "description": "Supports knowledge-driven and technology-intensive enterprises by fostering entrepreneurship.",
            "link": "https://dst.gov.in/",
            "type": "central"
        },
        {
            "name": "Manak (Million Minds Augmenting National Aspiration and Knowledge) Awards",
            "description": "Encourages innovation among school students by providing grants to develop creative ideas.",
            "link": "https://www.inspireawards-dst.gov.in/",
            "type": "central"
        },
        {
            "name": "Technology Development Programme (TDP)",
            "description": "Provides financial assistance for developing innovative technology solutions for commercial use.",
            "link": "https://dst.gov.in/",
            "type": "central"
        },
        {
            "name": "Biotechnology Ignition Grant (BIG) Scheme",
            "description": "Supports startups and entrepreneurs in biotechnology with funding for early-stage ideas.",
            "link": "https://www.birac.nic.in/",
            "type": "central"
        },
        {
            "name": "National Mission on Quantum Technologies and Applications (NM-QTA)",
            "description": "Focuses on advancing quantum computing, quantum communication, and quantum-enhanced precision measurements.",
            "link": "https://dst.gov.in/",
            "type": "central"
        },
        {
            "name": "IMPRINT (Impacting Research Innovation and Technology) India",
            "description": "Aims to address major engineering challenges through research in technology and science.",
            "link": "https://imprint-india.org/",
            "type": "central"
        }
        
    
    
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ''; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.dataset.type = scheme.type; // Add a custom data attribute for type
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemeItems = document.querySelectorAll('.scheme-item');

    schemeItems.forEach(item => {
        const schemeType = item.dataset.type; // Use the data-type attribute
        if (filterValue === 'all' || schemeType === filterValue) {
            item.style.display = ''; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

window.onload = populateSchemes;

document.addEventListener("scroll", () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
