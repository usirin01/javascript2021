//Question 00: Code the algorithm to calculate the hypothenus from the objects within the array.

const triangles = [

    {
        dikKenar: 3,
        yatayKenar: 4
    },
    {
        dikKenar: 5,
        yatayKenar: 12
    },
    {
        dikKenar: 8,
        yatayKenar: 15
    },
];

const findHypo = (pHypo) => {
    pHypo.map(triangle =>{
        let hypo = (triangle.dikKenar**2 + triangle.yatayKenar**2)**(1/2)
        console.log(hypo)
    })
}
findHypo(triangles);


