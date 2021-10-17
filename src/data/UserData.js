function User(name, role, country, url) {
  this.name = name;
  this.role = role;
  this.country = country;
  this.url = url;
}

const userData = [
  new User(
    "Per X Larsson",
    "Principal Engineer",
    "Sweden",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Per_X_Larsson.png"
  ),
  new User(
    "Charles Augustine",
    "Senior Software Engineer",
    "India",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Charles_Augustine.png"
  ),
  new User(
    "Tarun Mehta",
    "Level 3 Support Engineer",
    "India ",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_TarunMehta.png"
  ),
  new User(
    "Shashi Pandharkar",
    "Product Owner",
    "India ",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Shashi_Pandarkar.png"
  ),
  new User(
    "Dhiraj Goel",
    "Consulting Engineer - Technical Support",
    "U.S.A",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Dhiraj_Goel.png"
  ),
  new User(
    "Tong_Zhang",
    "Technical Support",
    "USA",
    "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Tong_Zhang.png"
  ),
];

export default userData;
