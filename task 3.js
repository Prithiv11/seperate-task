const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

const faill = scores
.filter((we) => we.marks < 40)
.map((we)=>we.name);
console.log(faill);

// var fail = scores.filter((score) => score.marks < 39);
// var fails=fail.map((score)=>score.name);
// console.log(fails);
