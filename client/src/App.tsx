import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Home from "@/pages/home";
import ClientsPage from "@/pages/clients";
import ClientDetailsPage from "@/pages/client-details";
import TasksPage from "@/pages/tasks";
import ProjectsPage from "@/pages/projects";
import ProjectDetailsPage from "@/pages/project-details";
import InvoicesPage from "@/pages/invoices";
import InvoiceDetailsPage from "@/pages/invoice-details";
import SubscriptionsPage from "@/pages/subscriptions";
import SubscriptionDetailsPage from "@/pages/subscription-details";
import PaymentsPage from "@/pages/payments";
import ContractsPage from "@/pages/contracts";
import ContractDetailsPage from "@/pages/contract-details";
import TemplatesPage from "@/pages/templates";
import TicketsPage from "@/pages/tickets";
import TicketDetailsPage from "@/pages/ticket-details";
import ReportsPage from "@/pages/reports";
import PerformancePage from "@/pages/performance";
import UserPerformancePage from "@/pages/performance-user";
import KnowledgebasePage from "@/pages/knowledgebase";
import UsersPage from "@/pages/users";
import WebsiteAnalyticsPage from "@/pages/analytics";
import GrowthKPIPage from "@/pages/growth-kpi";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/clients">
        <ClientsPage isActiveOnly={false} />
      </Route>
      <Route path="/clients/active">
        <ClientsPage isActiveOnly={true} />
      </Route>
      <Route path="/clients/:id" component={ClientDetailsPage} />
      <Route path="/tasks" component={TasksPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/:id" component={ProjectDetailsPage} />
      <Route path="/invoices" component={InvoicesPage} />
      <Route path="/invoices/:id" component={InvoiceDetailsPage} />
      <Route path="/subscriptions" component={SubscriptionsPage} />
      <Route path="/subscriptions/:id" component={SubscriptionDetailsPage} />
      <Route path="/payments" component={PaymentsPage} />
      <Route path="/contracts" component={ContractsPage} />
      <Route path="/contracts/:id" component={ContractDetailsPage} />
      <Route path="/templates" component={TemplatesPage} />
      <Route path="/tickets" component={TicketsPage} />
      <Route path="/tickets/:id" component={TicketDetailsPage} />
      <Route path="/knowledgebase" component={KnowledgebasePage} />
      <Route path="/reports" component={ReportsPage} />
      <Route path="/performance/:filter?" component={PerformancePage} />
      <Route path="/performance/user/:id/:filter?" component={UserPerformancePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/analytics" component={WebsiteAnalyticsPage} />
      <Route path="/growth/kpi-overview" component={GrowthKPIPage} />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
