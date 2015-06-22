var Star = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}/>
        )
    },
    renderStyles: function() {
        return {
            left: this.props.data.position.x + "em",
            top: this.props.data.position.y + "em",
            width: this.props.data.position.z * 0.1 + "em",
            height: this.props.data.position.z * 0.1 + "em",
            backgroundColor: this.props.data.color
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            star: true
        })
    }
})

module.exports = Star