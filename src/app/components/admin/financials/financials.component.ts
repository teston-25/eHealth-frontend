import { Component } from '@angular/core';

@Component({
  selector: 'app-financials',
  standalone: true,
  imports: [],
  templateUrl: './financials.component.html',
  styleUrl: './financials.component.css',
})
export class FinancialsComponent {
  //financial
  financialData = {
    totalRevenue: 150000, // Total revenue for the current period
    totalExpenses: 75000, // Total expenses for the current period
    netProfit: 75000, // Total profit (Revenue - Expenses)
    monthlyRevenue: [
      // Revenue per month
      { month: 'January', amount: 12000 },
      { month: 'February', amount: 15000 },
      { month: 'March', amount: 18000 },
      { month: 'April', amount: 11000 },
      { month: 'May', amount: 14000 },
      { month: 'June', amount: 16000 },
      { month: 'July', amount: 17000 },
      { month: 'August', amount: 13000 },
      { month: 'September', amount: 11000 },
      { month: 'October', amount: 12500 },
      { month: 'November', amount: 14000 },
      { month: 'December', amount: 16000 },
    ],
    monthlyExpenses: [
      // Expenses per month
      { month: 'January', amount: 6000 },
      { month: 'February', amount: 8000 },
      { month: 'March', amount: 7500 },
      { month: 'April', amount: 5000 },
      { month: 'May', amount: 6500 },
      { month: 'June', amount: 7000 },
      { month: 'July', amount: 7200 },
      { month: 'August', amount: 5500 },
      { month: 'September', amount: 5000 },
      { month: 'October', amount: 5700 },
      { month: 'November', amount: 6000 },
      { month: 'December', amount: 7000 },
    ],
    totalUsers: 3500, // Total number of users/customers
    activeUsers: 3000, // Number of active users
    subscriptions: 2800, // Number of subscription plans active
    churnRate: 0.12, // Percentage of users who left in the period
    averageRevenuePerUser: 42, // Average revenue per user (ARPU)
    conversionRate: 0.05, // Conversion rate (percentage of visitors who become paying users)
    lifetimeValue: 125, // Customer lifetime value (LTV)
    outstandingInvoices: 20000, // Total outstanding invoices amount
    paidInvoices: 120000, // Total paid invoices amount
    profitMargin: 0.5, // Profit margin (Revenue - Expenses) / Revenue
    topSellingProducts: [
      // Top-selling products/services for the period
      { product: 'Product A', amount: 30000 },
      { product: 'Product B', amount: 25000 },
      { product: 'Service X', amount: 20000 },
    ],
    accountsReceivable: 25000, // Total money owed by customers
    accountsPayable: 15000, // Total money owed to suppliers/vendors
    taxRate: 0.18, // Tax rate applied on revenue
    taxesCollected: 27000, // Total taxes collected
    taxesPaid: 13000, // Total taxes paid
  };
}
