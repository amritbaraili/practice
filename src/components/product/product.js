import React from "react";
import Card from "../card";
import Search from "../search";

const data = [
  {
    id: "1",
    title: "Ironman",
  },

  {
    id: "2",
    title: "Jhol momo",
  },
  {
    id: "3",
    title: "Crunchy chicken",
  },
];

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({
      value: data,
    });
  }

  render() {
    const filteredData = data.filter((item) => {
      if (item.title.toLowerCase().includes(this.state.value.toLowerCase())) {
        return item;
      }
    });

    return (
      <div>
        <Search
          inputField={this.state.value}
          onInputChange={this.handleChange}
        />



         <div>
        {filteredData.length > 0
          ? filteredData.map((item) => {
              return <Card title={item.title} key={item.id} />;
            })
          : data.map((item) => {
              return <Card title={item.title} key={item.id} />;
            })}
      </div>
      </div>
    );
  }
}

export default Product;
