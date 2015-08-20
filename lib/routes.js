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
    var data = Metadata.findOne(req);

    if (!!data) {
        self.response.end(JSON.stringify(data) + '\n');
    } else {
        self.response.end(JSON.stringify({
            err:        '404',
            message:    'Metadata not found: ' + req.project.project_name
        }) + '\n');
    }
});


Router.route('/api/metadata/set', { where: 'server' })
.post(function () {
    var self = this,
        req = self.request.body;

    var newMD = req.metadata;
    if (Metadata.findOne(newMD.project.project_name)) {
        self.response.end(JSON.stringify({
            err:        '500',
            message:    'Insufficient permissions to edit ' + req.project.project_name
        }) + '\n');
    }
    var newId = Metadata.insert(newMD);
    self.response.end(JSON.stringify({
        _id: newId
    }) + '\n');
});
