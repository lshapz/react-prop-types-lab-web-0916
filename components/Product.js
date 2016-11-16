const React = require('react');

class Product extends React.Component {
  render(){
    return(
      <div>
        {this.props.name} 
        Producer: {this.props.producer ? this.props.producer : "n/a"}
        Watermark: {this.props.hasWatermark}
        Color: {this.props.color}
        Weight: {this.props.weight}
      </div>


   )
  }
}
Product.defaultProps = {
  hasWatermark: false,
};



Product.propTypes = {
  name: React.PropTypes.string.isRequired, 
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
  const weight = props[propName];
  if (weight === undefined){
    return new Error ('required')
  }
  if (isNaN(weight))
  {
    return new Error ('number')
  }

  if (!(weight > 80 && weight < 300)) {
    return new Error ('no')
  }
},
  

};

module.exports = Product;
