import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const faqItems = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content:
      "We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month). " +
      "Each plan includes increasing storage limits, API access, priority support, and team collaboration features.",
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, " +
      "and ACH transfers for enterprise customers. You'll receive an invoice via email after each payment.",
  },
  {
    value: "cancel",
    trigger: "How do I cancel my subscription?",
    content:
      "You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties. " +
      "Your access will continue until the end of your current billing period.",
  },
];

function Study() {
  return (
    <section className="min-h-screen bg-gray-50/40 py-10 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left sidebar – FAQ navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <Card className="border-border/60 shadow-sm sticky top-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold tracking-tight">
                  Subscription & Billing
                </CardTitle>
                <CardDescription className="text-base mt-1.5 leading-relaxed">
                  Common questions about plans, payments, cancellations and account management.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="plans"
                  className="w-full"
                >
                  {faqItems.map((item) => (
                    <AccordionItem
                      key={item.value}
                      value={item.value}
                      className="border-b last:border-none py-1"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3">
                        {item.trigger}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4 pt-1">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-xl shadow-sm border border-border/40 min-h-[70vh] p-6 md:p-8">
              <div className="max-w-3xl mx-auto space-y-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight mb-2">
                    Welcome to your account dashboard
                  </h2>
                  <p className="text-muted-foreground">
                    This is where you can manage your subscription, view usage, update payment methods, download invoices, 
                    and explore all available features.
                  </p>
                </div>

                {/* You can add more sections here */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg p-6 bg-muted/30">
                    <h3 className="font-medium mb-2">Current Plan</h3>
                    <p className="text-2xl font-bold">Professional</p>
                    <p className="text-sm text-muted-foreground mt-1">$29 / month</p>
                  </div>

                  <div className="border rounded-lg p-6 bg-muted/30">
                    <h3 className="font-medium mb-2">Next Billing</h3>
                    <p className="text-2xl font-bold">Mar 2, 2026</p>
                    <p className="text-sm text-muted-foreground mt-1">$29 will be charged</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-4">Need help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our support team is available 24/7 for Professional and Enterprise customers.
                  </p>
                  <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Study;