async function handleRequest(request) {
        if (request.cf.country != 'SG') {
        return Response.redirect('https://1.1.1.1');
        }
    return new Response("“This is your "+request.headers.get('CF-Connecting-IP')+"and you are accessing this site from "+request.cf.country+" | "+request.cf.asn);
}

addEventListener("fetch", event => {
return event.respondWith(handleRequest(event.request))
})
