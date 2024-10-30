const container = document.getElementById("container");

const userItem = (user) => {

    const div = document.createElement("div");
    div.classList.add("userItem");

    // Div'es
    const Namediv = document.createElement("div");
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div");
    const infoAdressDiv = document.createElement("div");
    const infoCompanyDiv = document.createElement("div");

    // Name Div About
    const h1 = document.createElement("h1");
    h1.innerText = user.name;
    Namediv.appendChild(h1);

    // Info Div About
    const username = document.createElement("p");
    username.innerText = `Surname : ${user.username}`;
    username.classList.add("info-texts");
    infoDiv.appendChild(username);

    const mail = document.createElement("p");
    mail.innerText = `E-Mail : ${user.email}`;
    mail.classList.add("info-texts");
    infoDiv.appendChild(mail);

    const phone = document.createElement("p");
    phone.innerText = `Phone : ${user.phone}`;
    phone.classList.add("info-texts");
    infoDiv.appendChild(phone);

    const website = document.createElement("p");
    website.innerText = `Website : ${user.website}`;
    website.classList.add("info-texts");
    infoDiv.appendChild(website);

    // Info Address About

    infoDiv.appendChild(infoAdressDiv);

    const address = document.createElement("p");
    address.innerText = "Address";
    address.classList.add("info-boss-text");
    infoAdressDiv.appendChild(address);
    
    const adressDiv = document.createElement("div");
    adressDiv.classList.add("info-div");

    const street = document.createElement("p");
    street.innerText = `Street : ${user.address.street}`;
    street.classList.add("info-texts");
    adressDiv.appendChild(street);

    const suite = document.createElement("p");
    suite.innerText = `Suite : ${user.address.suite}`;
    suite.classList.add("info-texts");
    adressDiv.appendChild(suite);

    const city = document.createElement("p");
    city.innerText = `City : ${user.address.city}`;
    city.classList.add("info-texts");
    adressDiv.appendChild(city);

    const zipcode = document.createElement("p");
    zipcode.innerText = `Zip Code : ${user.address.zipcode}`;
    zipcode.classList.add("info-texts");
    adressDiv.appendChild(zipcode);

    infoAdressDiv.appendChild(adressDiv);

    const geo = document.createElement("p");
    geo.innerText = "Geo";
    geo.classList.add("info-geo");
    adressDiv.appendChild(geo);

    geoDiv = document.createElement("div");

    const lat = document.createElement("p");
    lat.innerText = `Lat : ${user.address.geo.lat}`;
    lat.classList.add("info-texts");
    geoDiv.appendChild(lat);

    const lng = document.createElement("p");
    lng.innerText = `Lng : ${user.address.geo.lng}`;
    lng.classList.add("info-texts");
    geoDiv.appendChild(lng);   

    adressDiv.appendChild(geoDiv);


    adressDiv.style.display = "none";
    geoDiv.style.display = "none";
    clickDiv(address, adressDiv); 
    clickDiv(geo, geoDiv); 

    //////////////////////////////////////////////////////////////

    // Info Company About

    infoDiv.appendChild(infoCompanyDiv);

    const company = document.createElement("p");
    company.innerText = "Company";
    company.classList.add("info-boss-text");
    infoCompanyDiv.appendChild(company);
    
    const companyDiv = document.createElement("div");
    companyDiv.classList.add("info-div");

    const companyName = document.createElement("p");
    companyName.innerText = `Name : ${user.company.name}`;
    companyName.classList.add("info-texts");
    companyDiv.appendChild(companyName);

    const catchPhrase = document.createElement("p");
    catchPhrase.innerText = `Catch Phrase : ${user.company.catchPhrase}`;
    catchPhrase.classList.add("info-texts");
    companyDiv.appendChild(catchPhrase);

    const bs = document.createElement("p");
    bs.innerText = `Bs : ${user.company.bs}`;
    bs.classList.add("info-texts");
    companyDiv.appendChild(bs);

    infoCompanyDiv.appendChild(companyDiv);

    companyDiv.style.display = "none";
    clickDiv(company, companyDiv);

    //////////////////////////////////////////////////////////////

    infoDiv.style.display = "none";
    clickDiv(Namediv, infoDiv);

    div.appendChild(Namediv);
    div.appendChild(infoDiv);
    
    container.appendChild(div);
};

const createUserItems = (users) => {
    users.map(user => {
        userItem(user);
    });
};

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    createUserItems(data);
};

function clickDiv(clickDivName, openDivName) {
    clickDivName.addEventListener("click", () => {
        if (openDivName.style.display === "none") {
            openDivName.style.display = "block"; 
        } else {
            openDivName.style.display = "none"; 
        }
    });
}

getUsers();
