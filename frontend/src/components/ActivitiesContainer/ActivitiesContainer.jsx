import React from "react";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";

class ActivitiesContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            activities: []
        };

        this.handleNewActivity = this.handleNewActivity.bind(this);
    }

    handleNewActivity(activity) {
        this.setState({
            activities: [...this.state.activities, activity]
        });
    }

    render() {
        return (
            <div>
                <ActivitiesForm handleNewActivity={this.handleNewActivity}/>
                <ActivitiesList activities={this.state.activities} />
            </div>);
    }
}

export default ActivitiesContainer;