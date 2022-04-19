import * as React from "react";

export default function ImageCards() {
  return (
    <div className="skills-container">
      {data.map((item) => (
        <img
          src={`${item.imageURL}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          className="logo"
        />
      ))}
    </div>
  );
}

const data = [
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122076/logos/javascript_mxf8g5.png",
    title: "JavaScript",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122076/logos/react_eqbd5r.png",
    title: "React",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122076/logos/node_zyepjj.png",
    title: "Node",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122076/logos/express_k2br9h.png",
    title: "Express",
  },

  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/sql_o8xuyz.png",
    title: "SQL",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122076/logos/mongodb_2_cculfj.png",
    title: "MongoDB",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/bootstrap_l3pnxg.png",
    title: "Bootstrap",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/postgresql_wyl6y1.png",
    title: "PostgreSQL",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/sequelize_1_idqo5m.png",
    title: "Sequelize",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/aws_fr3tzo.png",
    title: "AWS",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/v1650122075/logos/github_m1dgg1.png",
    title: "GitHub",
  },
  {
    imageURL:
      "https://res.cloudinary.com/dqexqyy2j/image/upload/c_scale,w_128/v1649905129/logos/muilogo_nnwew8.png",
    title: "Material UI",
  },
];
