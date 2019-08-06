import $ from "jquery"

export function getActivities(successCallback, errorCallback) {
    $.ajax({
        type: "GET",
        url: "/activities",
        dataType: "json",
        success: successCallback,
        error: errorCallback
    });
}

export function createActivity(activity, successCallback, errorCallback) {
    $.ajax({
        type: "POST",
        url: "/activities/create/",
        contentType: "application/json",
        data: JSON.stringify(activity),
        success: successCallback,
        error: errorCallback
    });
}