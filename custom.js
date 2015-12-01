var listOfContacts = [ { 
"id" : 7, 
"createdDate" : "2015-11-29T07:25:55.886+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "www.theage.com.au", 
"sourcePort" : 80, 
"destinationAddress" : "server.msoc.io/192.168.70.142", 
"destinationPort" : 80, 
"length" : 106, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 0 
}, { 
"id" : 8, 
"createdDate" : "2015-11-29T07:25:55.988+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "server.msoc.io/192.168.70.142", 
"sourcePort" : 80, 
"destinationAddress" : "www.theage.com.au", 
"destinationPort" : 80, 
"length" : 107, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 1 
}, { 
"id" : 9, 
"createdDate" : "2015-11-29T07:25:56.093+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "www.theage.com.au", 
"sourcePort" : 80, 
"destinationAddress" : "server.msoc.io/192.168.70.142", 
"destinationPort" : 80, 
"length" : 108, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 0 
}, { 
"id" : 10, 
"createdDate" : "2015-11-29T07:25:56.195+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "server.msoc.io/192.168.70.142", 
"sourcePort" : 80, 
"destinationAddress" : "www.theage.com.au", 
"destinationPort" : 80, 
"length" : 109, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 1 
}, { 
"id" : 1, 
"createdDate" : "2015-11-29T07:25:55.269+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "www.theage.com.au", 
"sourcePort" : 80, 
"destinationAddress" : "server.msoc.io/192.168.70.142", 
"destinationPort" : 80, 
"length" : 100, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 0 
}, { 
"id" : 2, 
"createdDate" : "2015-11-29T07:25:55.369+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "server.msoc.io/192.168.70.142", 
"sourcePort" : 80, 
"destinationAddress" : "www.theage.com.au", 
"destinationPort" : 80, 
"length" : 101, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 1 
}, { 
"id" : 3, 
"createdDate" : "2015-11-29T07:25:55.470+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "www.theage.com.au", 
"sourcePort" : 80, 
"destinationAddress" : "server.msoc.io/192.168.70.142", 
"destinationPort" : 80, 
"length" : 102, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 0 
}, { 
"id" : 4, 
"createdDate" : "2015-11-29T07:25:55.575+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "server.msoc.io/192.168.70.142", 
"sourcePort" : 80, 
"destinationAddress" : "www.theage.com.au", 
"destinationPort" : 80, 
"length" : 103, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 1 
}, { 
"id" : 5, 
"createdDate" : "2015-11-29T07:25:55.677+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "www.theage.com.au", 
"sourcePort" : 80, 
"destinationAddress" : "server.msoc.io/192.168.70.142", 
"destinationPort" : 80, 
"length" : 104, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 0 
}, { 
"id" : 6, 
"createdDate" : "2015-11-29T07:25:55.783+0000", 
"deviceId" : "c4c7a56f-c93b-4948-b92b-be64e49cccdf", 
"sourceAddress" : "server.msoc.io/192.168.70.142", 
"sourcePort" : 80, 
"destinationAddress" : "www.theage.com.au", 
"destinationPort" : 80, 
"length" : 105, 
"blocked" : false, 
"countryCode" : null, 
"direction" : 1 
} ]; 
$(document).ready(function(){
	var contactTemplate = _.template($("#contact-template").html());
	var resultingHtml = contactTemplate({contacts : listOfContacts})
	$(".contacts-list").html(resultingHtml);
});              