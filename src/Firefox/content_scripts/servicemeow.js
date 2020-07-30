// Declaring variables based on access method (iframe or separate tab)

if (document.getElementById("gsft_main")) {
    var iframe = document.getElementById("gsft_main").contentWindow.document
    var state = iframe.getElementById("incident.state")
    var assignment_group = iframe.getElementById("sys_display.incident.assignment_group")
    var short_description = iframe.getElementById("incident.short_description")
    var description = iframe.getElementById("incident.description")
    var impact = iframe.getElementById("incident.impact")
    var urgency = iframe.getElementById("incident.urgency")
    var configuration_item = iframe.getElementById("sys_display.incident.cmdb_ci")
    var knowledge_article = iframe.getElementById("sys_display.incident.u_knowledge_article")
    var business_area = iframe.getElementById("sys_display.incident.u_business_area")
    var value_stream = iframe.getElementById("sys_display.incident.u_value_stream")
    var action_l1 = iframe.getElementById("incident.u_action_l1_unlock")
    var possible_loss_in_business = iframe.getElementById("incident.u_possible_loss_in_business_unlock")
    var tabs = iframe.getElementsByClassName("tabs2_tab")
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].textContent === "*Related Records") {
            var related_records = tabs[i]
        } else if (tabs[i].textContent === "*ISC Specific") {
            var isc_specific = tabs[i]
        }
    }
} else {
    var state = document.getElementById("incident.state")
    var assignment_group = document.getElementById("sys_display.incident.assignment_group")
    var short_description = document.getElementById("incident.short_description")
    var description = document.getElementById("incident.description")
    var impact = document.getElementById("incident.impact")
    var urgency = document.getElementById("incident.urgency")
    var configuration_item = document.getElementById("sys_display.incident.cmdb_ci")
    var knowledge_article = document.getElementById("sys_display.incident.u_knowledge_article")
    var business_area = document.getElementById("sys_display.incident.u_business_area")
    var value_stream = document.getElementById("sys_display.incident.u_value_stream")
    var action_l1 = document.getElementById("incident.u_action_l1_unlock")
    var possible_loss_in_business = document.getElementById("incident.u_possible_loss_in_business_unlock")
    var tabs = document.getElementsByClassName("tabs2_tab")
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].textContent === "*Related Records") {
            var related_records = tabs[i]
        } else if (tabs[i].textContent === "*ISC Specific") {
            var isc_specific = tabs[i]
        }
    }
}

var palette_current = "lightblue"
var palette_selection = {
    "lightblue": { "primary": "#99dfff", "secondary": "#ccefff" },
    "violet": { "primary": "#9999ff", "secondary": "#ccccff" },
    "purple": { "primary": "#e699ff", "secondary": "#f2ccff" },
    "seafoam": { "primary": "#99ffe6", "secondary": "#ccfff2" },
    "lime": { "primary": "#b3ff99", "secondary": "#d9ffcc" },
    "peach": { "primary": "#ffe699", "secondary": "#fff2cc" }
}

// browser.runtime.onMessage.addListener(function(){
//     alert("message received")
// })

// Var grouping and formatting

var f_primary = [state, assignment_group, short_description, description, impact, urgency]
var f_secondary = [knowledge_article, business_area, value_stream, action_l1, possible_loss_in_business, related_records, isc_specific]

f_primary.forEach(function(element) { 
    element.style.backgroundColor = palette_selection[palette_current]["primary"]
    element.style.boxShadow = "1px 2px 3px rgba(0, 0, 0, 0.4)"
})
f_secondary.forEach(function(element) {
    element.style.backgroundColor = palette_selection[palette_current]["secondary"]
})

// Fields are filled out

state.value = 9
short_description.value = "<country> <affected solution> <short description>"
description.value = "•\tHost name/ Computer name:\n•\tUser name:\n•\tDescription of problem:\n•\tError message:\n•\tTelephone number:\n•\tAddress:\n•\tLocation (city, building, floor, room):\n•\tNumber of users affected:\n•\tScreenshot attached: Yes/No\n•\tWhen was the last time it worked:\n•\tTROUBLESHOOTING STEPS:\n•\tCan the user communicate in English?\n•\tDoes the user use Skype?\n•\tAdditional information:\n\n\n*** generictemplate***  KB0026925***"

document.onload = setTimeout(function() {
    urgency.focus()
    setTimeout(function() { urgency.blur() }, 10)
    assignment_group.focus()
}, 0)