import React from "react";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import * as api from "../../utils/activitiesApi";

class ActivitiesContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            activities: []
        };

        this.handleNewActivity = this.handleNewActivity.bind(this);
    }

    componentDidMount() {
        api.getActivities(
            oldActivities => {
                this.setState({ activities: oldActivities.all })
            },
            error => {
                console.log(error);
            });
    }

    handleNewActivity(activity) {
        api.createActivity(activity,
            newActivity => {
                this.setState({
                    activities: [...this.state.activities, newActivity]
                });
            },
            error => {
                console.log(error);
            })
        
    }

    render() {
        return (
            <div>
                <ActivitiesForm handleNewActivity={this.handleNewActivity} />
                <ActivitiesList activities={this.state.activities} />
            </div>);
    }
}

export default ActivitiesContainer;