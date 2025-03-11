"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Star, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { ResourceReview } from "@/lib/resources"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ResourceReviewsProps {
  resourceId?: string
  reviews: ResourceReview[]
  className?: string
}

export function ResourceReviews({ reviews, className }: ResourceReviewsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState("5")
  const [name, setName] = useState("")

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would submit to an API
      console.log("Submitting review:", {
        resourceId: "",
        name,
        rating: Number.parseInt(rating),
        text: reviewText,
      })

      // Wait for 1 second to simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setReviewText("")
      setRating("5")
      setName("")
      setReviewFormOpen(false)

      // In a real app, you would refresh the reviews list here
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className={cn("py-6", className)}>
        <div className="text-center mb-6 text-muted-foreground">
          No reviews yet. Be the first to review this resource!
        </div>

        <div className="flex justify-center">
          <Dialog open={reviewFormOpen} onOpenChange={setReviewFormOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Write a Review
              </Button>
            </DialogTrigger>
            {renderReviewForm()}
          </Dialog>
        </div>
      </div>
    )
  }

  // Function to render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    )
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  function renderReviewForm() {
    return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>Share your experience with this resource to help others.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmitReview}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="rating" className="text-sm font-medium">
                Rating
              </label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">★★★★★ (5) Excellent</SelectItem>
                  <SelectItem value="4">★★★★☆ (4) Good</SelectItem>
                  <SelectItem value="3">★★★☆☆ (3) Average</SelectItem>
                  <SelectItem value="2">★★☆☆☆ (2) Poor</SelectItem>
                  <SelectItem value="1">★☆☆☆☆ (1) Very Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="review" className="text-sm font-medium">
                Your Review
              </label>
              <Textarea
                id="review"
                rows={4}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setReviewFormOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    )
  }

  return (
    <div className={cn("", className)}>
      <h2 className="text-2xl font-semibold mb-6">User Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-xs text-muted-foreground">{formatDate(review.date)}</div>
                </div>
                <div className="ml-auto">{renderStars(review.rating)}</div>
              </div>
              <p className="text-sm">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

