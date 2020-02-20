const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const w2c = require('./routes/web2campaign');
const rootDir = require('./utils/path');

const app = express();
app.set("view engine", "pug");
app.set("views", "views")


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use('/web2campaign', w2c);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,resp) => {
    resp.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);