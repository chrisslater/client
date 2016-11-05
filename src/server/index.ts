import * as Koa from "koa";
import * as parser from "koa-bodyparser";
import * as serve from "koa-static";

const app = new Koa();

app.use(parser());
app.use(serve("static"));
app.use(serve("dist/app"));
app.listen(80);
