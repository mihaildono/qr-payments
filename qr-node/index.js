const app = require("express")();
const stripe = require("stripe")(
  "sk_test_51OgS4zAfvXmllvkHInafpGyKGez1wgKOB9AHCNBGSQbq7YMPvxVpHVtZplnuoXC2dC7kGiaiVqGmjqZTM5mRzZAs004Srsk5oh"
);

app.get("/intent", async (_, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: 1000,
        currency: "eur",
        automatic_payment_methods: {
          enabled: true,
        },
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
