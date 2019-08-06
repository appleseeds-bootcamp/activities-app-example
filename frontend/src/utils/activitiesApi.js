import $ from "jquery"

// Django requires adding CSRF token
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

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