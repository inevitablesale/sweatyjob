"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search, Eye, Mail } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Payment {
  id: string
  user_id: string
  amount: number
  currency: string
  status: string
  stripe_payment_id: string | null
  stripe_invoice_id: string | null
  payment_method: string | null
  payment_method_last4: string | null
  created_at: string | null
  profiles: {
    email: string
    first_name: string | null
    last_name: string | null
  }
}

interface PaymentsTableProps {
  payments: Payment[]
  totalPages: number
  currentPage: number
  statusOptions: string[]
  statusFilter: string
  searchQuery: string
}

export function PaymentsTable({
  payments,
  totalPages,
  currentPage,
  statusOptions,
  statusFilter,
  searchQuery,
}: PaymentsTableProps) {
  const router = useRouter()
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null)
  const [localSearch, setLocalSearch] = useState(searchQuery)
  const [localStatus, setLocalStatus] = useState<string>(statusFilter)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return

    const params = new URLSearchParams()
    params.set("page", newPage.toString())
    if (statusFilter) params.set("status", statusFilter)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/payments?${params.toString()}`)
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    params.set("page", "1")
    if (localStatus) params.set("status", localStatus)
    if (localSearch) params.set("search", localSearch)

    router.push(`/admin/payments?${params.toString()}`)
  }

  const handleStatusFilter = (status: string) => {
    setLocalStatus(status)

    const params = new URLSearchParams()
    params.set("page", "1")
    if (status) params.set("status", status)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/payments?${params.toString()}`)
  }

  const handleClearFilters = () => {
    setLocalSearch("")
    setLocalStatus("")
    router.push("/admin/payments")
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "succeeded":
        return "bg-green-500/10 text-green-500"
      case "pending":
        return "bg-yellow-500/10 text-yellow-500"
      case "failed":
        return "bg-red-500/10 text-red-500"
      default:
        return "bg-gray-500/10 text-gray-500"
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleString()
  }

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by customer name or email"
              className="pl-10 bg-night-800 border-night-700 text-white"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} className="bg-sweat-500 hover:bg-sweat-600">
            Search
          </Button>
        </div>

        <div className="flex gap-4">
          <Select value={localStatus} onValueChange={handleStatusFilter}>
            <SelectTrigger className="w-[180px] bg-night-800 border-night-700 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-night-800 border-night-700 text-white">
              <SelectItem value="all">All statuses</SelectItem>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="border-night-700 text-gray-400 hover:text-white"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-night-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-night-800">
            <TableRow className="hover:bg-night-800/50 border-night-700">
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Customer</TableHead>
              <TableHead className="text-gray-400">Amount</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Payment Method</TableHead>
              <TableHead className="text-gray-400">Stripe ID</TableHead>
              <TableHead className="text-gray-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.length === 0 ? (
              <TableRow className="hover:bg-night-800/50 border-night-700">
                <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                  No payments found
                </TableCell>
              </TableRow>
            ) : (
              payments.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-night-800/50 border-night-700">
                  <TableCell className="text-white">{formatDate(payment.created_at)}</TableCell>
                  <TableCell>
                    <div className="font-medium text-white">
                      {payment.profiles.first_name || ""} {payment.profiles.last_name || ""}
                      {!payment.profiles.first_name && !payment.profiles.last_name && (
                        <span className="text-gray-400">No name</span>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm">{payment.profiles.email}</div>
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    {formatAmount(payment.amount, payment.currency)}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusBadgeColor(payment.status)}`}>{payment.status}</Badge>
                  </TableCell>
                  <TableCell className="text-white">
                    {payment.payment_method || "N/A"}
                    {payment.payment_method_last4 && (
                      <span className="text-gray-400 ml-1">•••• {payment.payment_method_last4}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-400 text-sm">
                    <div className="truncate max-w-[150px]">{payment.stripe_payment_id || "N/A"}</div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                        onClick={() => (window.location.href = `mailto:${payment.profiles.email}`)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-white"
                            onClick={() => setSelectedPayment(payment)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-night-800 border-night-700 text-white">
                          <DialogHeader>
                            <DialogTitle>Payment Details</DialogTitle>
                          </DialogHeader>

                          {selectedPayment && (
                            <div className="space-y-6 mt-4">
                              <div className="flex justify-between items-center">
                                <div className="text-gray-400">Amount</div>
                                <div className="text-xl font-bold text-white">
                                  {formatAmount(selectedPayment.amount, selectedPayment.currency)}
                                </div>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-gray-400">Status</div>
                                <Badge className={`${getStatusBadgeColor(selectedPayment.status)}`}>
                                  {selectedPayment.status}
                                </Badge>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-gray-400">Date</div>
                                <div className="text-white">{formatDate(selectedPayment.created_at)}</div>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-gray-400">Customer</div>
                                <div className="text-white text-right">
                                  <div>
                                    {selectedPayment.profiles.first_name || ""}{" "}
                                    {selectedPayment.profiles.last_name || ""}
                                  </div>
                                  <div className="text-sm text-gray-400">{selectedPayment.profiles.email}</div>
                                </div>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-gray-400">Payment Method</div>
                                <div className="text-white">
                                  {selectedPayment.payment_method || "N/A"}
                                  {selectedPayment.payment_method_last4 && (
                                    <span className="text-gray-400 ml-1">
                                      •••• {selectedPayment.payment_method_last4}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="pt-4 border-t border-night-700">
                                <div className="text-gray-400 mb-2">Stripe Details</div>

                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <div className="text-sm text-gray-400">Payment ID</div>
                                    <div className="text-sm text-white break-all text-right">
                                      {selectedPayment.stripe_payment_id || "N/A"}
                                    </div>
                                  </div>

                                  <div className="flex justify-between">
                                    <div className="text-sm text-gray-400">Invoice ID</div>
                                    <div className="text-sm text-white break-all text-right">
                                      {selectedPayment.stripe_invoice_id || "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button className="bg-sweat-500 hover:bg-sweat-600">Close</Button>
                                </DialogClose>
                              </DialogFooter>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 border-night-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 border-night-700"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
