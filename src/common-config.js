/*
JS functions used to manage credentials using vss-web-extension-sdk.
*/
var hostConnections = {};
var connectionData = {};
var hostValue = [];
var windowCLI;
var linuxCLI;
var activeNewHost = false;

/*
function used to load stored credentials on page load.
*/
$(document).ready(function () {
    VSS.init();
    VSS.getService(VSS.ServiceIds.ExtensionData).then(function (dataService) {
        // Get value in user scope
        dataService.getValue("hostconnection").then(function (hostConnectionsData) {
            let modifiedConnections = {};
            hostConnectionsData.map(el => {
                modifiedConnections[el.host] = el;
            });
            hostConnections = { ...modifiedConnections, ...hostConnections }
            hostValue = [...Object.keys(hostConnections)]
            appendHost(hostValue);
        });
        dataService.getValue("windows_CLI").then(function (windowCLI) {
            if (windowCLI != null)
                document.getElementById('windows_CLI').value = windowCLI;
        });
        dataService.getValue("linux_CLI").then(function (linuxCLI) {
            if (linuxCLI != null)
                document.getElementById('linux_CLI').value = linuxCLI;
        });
    });

    $(".hostListBinding").change(function () {
        $(".hostInput").hide();
        // if(this.value==="select") return ;

        activeNewHost = false;

        if (this.value === "") {
            activeNewHost = true;
            $(".hostInput").show();
            ClearFields();
            return;
        }
        appendDataToForm(this.value);

    })

    $(".hostListBinding").trigger("change");

});

/*
function used adding multiple hostconnections.
*/
function appendHost(hostValue) {
    hostValue.forEach(function (optValue) {
        var $option = $("<option/>", {
            value: optValue,
            text: optValue
        });
        $(".hostListBinding").append($option);
    });
}

function appendDataToForm(hostName) {
    var hostData = hostConnections[hostName];
    for (let [hostKey, hostValue] of Object.entries(hostData)) {
        $("#" + hostKey).val(hostValue)
    }
}

/*
function used to delete selected host connection from the list.
*/
function deleteProjectDetails() {
    let deletedHost = $('#host').val();
    delete hostConnections[deletedHost];

    hostValue.pop(deletedHost);
    $(".hostListBinding option[value='" + deletedHost + "']").remove()

    VSS.getService(VSS.ServiceIds.ExtensionData).then(function (dataService) {
        // Set value in user scope
        dataService.setValue("hostconnection", hostConnections).then(function (value) {
            console.log(value);
        });
    });
    ClearFields();
}

/*
function used to save new host connection
*/
function submitProjectDetails() {

    connectionData = {
        "host": activeNewHost ? $('#hostInput').val() : $('#host').val(),
        "description": document.getElementById('description').value,
        "protocol": document.getElementById('protocol').value,
        "code_page": document.getElementById('code_page').value,
        "timeout": document.getElementById('timeout').value,
        "ces_url": document.getElementById('ces_url').value
    }
    hostConnections[connectionData.host] = connectionData;
    VSS.getService(VSS.ServiceIds.ExtensionData).then(function (dataService) {
        // Set value in user scope
        let modifiedConnectionData = Object.values(hostConnections);
        dataService.setValue("hostconnection", modifiedConnectionData).then(function (value) {

        });
        dataService.setValue("windows_CLI", document.getElementById('windows_CLI').value).then(function (value) {
            console.log(value);
        });
        dataService.setValue("linux_CLI", document.getElementById('linux_CLI').value).then(function (value) {
            console.log(value);
        });
    });
    if (activeNewHost)
        appendHost([connectionData.host]);
    //   ClearFields();
}

/*
function used to clear all fields from form.
*/
function ClearFields() {

    document.getElementById("host").value = "";
    document.getElementById('hostInput').value = "";
    document.getElementById("description").value = "";
    document.getElementById("protocol").value = "";
    document.getElementById("code_page").value = "";
    document.getElementById("timeout").value = "";
    document.getElementById("ces_url").value = "";
} 