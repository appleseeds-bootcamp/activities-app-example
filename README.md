This project was created within a workshop at Appleseeds Academy, in which we intergrated Django with our React App

Creating the Backend was based on existing FE app that was created on a past workshop.

## Steps that was taken to produce the project

Create folder seperation for FE

Setup django, rename folder to BE
Setup django app

Change settings for serving REACT
    * See: ServeReactStaticFiles.md


Create "Activity" model
    makemigrations


create view:
    get_activites
    create_activities

create activites: urls.py
** Check with Postman

FE:
    add proxy in package.json

    create activityApi utils JS

    ActivitesContainer
        - call loadActivities in componentDidMount


Adding login mechanism:
    wrap the root url (React's static template) with login_required
    Configuration in settings.py
    adding relevant urls
    add decorator in views

FE:
    Add logout button


## TODO:
    Show different activities for each user
    implement registeration
