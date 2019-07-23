// DATA RESOURCES
let dataResorce = [
    {
        heading: "Wind Energy",
        bodyText: "Wind power or wind energy is the use of air flow through wind turbines to provide the mechanical power to turn electric generators and traditionally to do other work, like milling or pumping. Wind power is a sustainable and renewable alternative to burning fossil fuels, and has much less effect on the environment.Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network. Onshore wind is an inexpensive source of electric power, competitive with or in many places cheaper than coal or gas plants.Onshore wind farms also have an impact on the landscape, as typically they need to be spread over more land than other power stations and need to be built in wild and rural areas, which can lead to industrialization of the countryside and habitat loss.Offshore wind is steadier and stronger than on land and offshore farms have less visual impact, but construction and maintenance costs are considerably higher. Small onshore wind farms can feed some energy into the grid or provide electric power to isolated off-grid locations",
        imgUrl: "images/wind-energy.jpg"
    },
    {
        heading: "Solar Energy",
        bodyText: "Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis.It is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power. Active solar techniques include the use of photovoltaic systems, concentrated solar power and solar water heating to harness the energy. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light-dispersing properties, and designing spaces that naturally circulate air.",
        imgUrl: "images/solar.jpg"
    },
    {
        heading: "Tidal Energy",
        bodyText: "Tidal power or tidal energy is the form of hydropower that converts the energy obtained from tides into useful forms of power, mainly electricity.Although not yet widely used, tidal energy has potential for future electricity generation. Tides are more predictable than the wind and the sun. Among sources of renewable energy, tidal energy has traditionally suffered from relatively high cost and limited availability of sites with sufficiently high tidal ranges or flow velocities, thus constricting its total availability. However, many recent[when?] technological developments and improvements, both in design (e.g. dynamic tidal power, tidal lagoons) and turbine technology (e.g. new axial turbines, cross flow turbines), indicate that the total availability of tidal power may be much higher than previously assumed, and that economic and environmental costs may be brought down to competitive levels.",
        imgUrl: "images/tidal.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev) {

    // fetch the clicked button
    let clickedBtn = ev.target;

    // read the text inside the button
    let btnText = clickedBtn.innerText;

    // print the text of the clicked button
    //console.log(btnText);

    if (btnText === "Wind") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "Solar") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3> 
                              <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                              <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }

}


for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", eventHandler);
}
