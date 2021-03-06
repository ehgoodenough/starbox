var StarshipPart = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                {this.renderPartparts()}
            </div>
        )
    },
    renderStyles: function() {
        return {
            position: "absolute",
            top: this.props.data.position.y + "em",
            left: this.props.data.position.x + "em",
        }
    },
    renderPartparts: function() {
        var renderings = new Array()
        for(var key in this.props.data.shape) {
            renderings.push(
                <StarshipPartpart key={key}
                    color={this.props.data.color}
                    position={this.props.data.shape[key]}/>
            )
        }
        return renderings
    }
})

var StarshipPartpart = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        return {
            width: "1em",
            height: "1em",
            position: "absolute",
            top: this.props.position.y + "em",
            left: this.props.position.x + "em",
            backgroundColor: this.props.color,
        }
    }
})

module.exports = StarshipPart
