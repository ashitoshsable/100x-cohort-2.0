import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt';

//Interface for the env
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_secret:string
  }
}>()

//MiddleWare
app.use('/api/v1/blog/*', async (c,next)=>{
  const header = c.req.header("authorization") || "";

  const response = await verify(header,c.env.JWT_secret);

  if(!response.id){
    c.status(401);
    return c.json({
      message:"Unauthorized"
    })
  }

  await next();
});

//signup route - application
app.post('/api/v1/user/signup', async (c) => {
  const DBUrl = c.env.DATABASE_URL;

  const prisma = new PrismaClient({
    datasourceUrl: DBUrl,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const exsitingUser = await prisma.user.findUnique({
    where:{
      email:body.email
    }
  });

  if(exsitingUser){
    c.status(403);
    return c.json({
      error:"Email already exists!"
    })
  }

  //Created a user in DB
  const user = await prisma.user.create({
    data:{
      email: body.email,
      name: body.name,
      password: body.password
    }
  })

  if(!user){
    c.status(403);
    return c.json({
      error:"error in creating a user!"
    })
  }

  //JWT signed token
  const token = await sign({id: user.id}, c.env.JWT_secret);

  //Sending token back to the client
  return c.json({
    jwt: token
  })
});

//signin route - application
app.post('/api/v1/user/signin', async (c) => {
  const DBUrl = c.env.DATABASE_URL;

  const prisma = new PrismaClient({
    datasourceUrl: DBUrl,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const existingUser = await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password
    }
  })

  if(!existingUser){
    c.status(401);
    return c.json({
      error:"User not found!"
    })
  }

  const jwt = await sign({id:existingUser.id},c.env.JWT_secret);

  return c.json({
    message:"Sign in successful!",
    token:jwt
  })
});

//
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
