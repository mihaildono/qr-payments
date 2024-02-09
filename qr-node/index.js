var cors = require("cors");
const app = require("express")();
const stripe = require("stripe")(
  "sk_test_51OgS4zAfvXmllvkHInafpGyKGez1wgKOB9AHCNBGSQbq7YMPvxVpHVtZplnuoXC2dC7kGiaiVqGmjqZTM5mRzZAs004Srsk5oh"
);

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/intent", async (_, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: 1000,
        currency: "eur",
        payment_method_types: ["card"],
      },
      {
        stripeAccount: "acct_1OgS4zAfvXmllvkH",
      }
    );

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.listen(4000, () => console.log("Running on port 4000"));
