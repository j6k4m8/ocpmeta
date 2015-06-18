Router.route('/api/metadata/get', { where: 'server' })
.post(function () {
    var self = this,
        req = self.request.body;

    /*
    var token = Tokens.findOne({token: req.token});
    if (!token) {
        self.response.end(JSON.stringify({
            err:        '501',
            message:    'Bad token: ' + req.token
        }) + '\n');
    }
    */
    var data = Metadata.findOne(req.dataId);

    if (!!data) {
        self.response.end(JSON.stringify(data) + '\n');
    } else {
        self.response.end(JSON.stringify({
            err:        '404',
            message:    'Datum not found: ' + req.dataId
        }) + '\n');
    }
});


Router.route('/api/metadata/set', { where: 'server' })
.post(function () {
    var self = this,
        req = self.request.body;

    var newMD = req.metadata;
    console.log(newMD);
    var newId = Metadata.insert(newMD);
    self.response.end(JSON.stringify({
        _id: newId
    }) + '\n');
});
