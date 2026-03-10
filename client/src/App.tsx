import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Home from "@/pages/home";
import ClientsPage from "@/pages/clients";
import TasksPage from "@/pages/tasks";
import ProjectsPage from "@/pages/projects";
import InvoicesPage from "@/pages/invoices";
import SubscriptionsPage from "@/pages/subscriptions";
import PaymentsPage from "@/pages/payments";
import ContractsPage from "@/pages/contracts";
import TemplatesPage from "@/pages/templates";
import TicketsPage from "@/pages/tickets";
import ReportsPage from "@/pages/reports";
import KnowledgebasePage from "@/pages/knowledgebase";
import UsersPage from "@/pages/users";
import WebsiteAnalyticsPage from "@/pages/analytics";

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
      <Route path="/tasks" component={TasksPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/invoices" component={InvoicesPage} />
      <Route path="/subscriptions" component={SubscriptionsPage} />
      <Route path="/payments" component={PaymentsPage} />
      <Route path="/contracts" component={ContractsPage} />
      <Route path="/templates" component={TemplatesPage} />
      <Route path="/tickets" component={TicketsPage} />
      <Route path="/knowledgebase" component={KnowledgebasePage} />
      <Route path="/reports" component={ReportsPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/analytics" component={WebsiteAnalyticsPage} />
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
