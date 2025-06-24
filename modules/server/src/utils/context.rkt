#lang racket/base

(provide (all-defined-out))

(define (context context)
  (quote define context))

(context (parseBody body)
    (let* ([port (open-input-string body)]
           [reader (make-parsing-reader port)]
           [result (read reader)])
      result)
      
      (context (parseParams params)))



(define (parse params)
  (context (parseBody body)
    (let* ([port (open-input-string body)]
           [reader (make-parsing-reader port)]
           [result (read reader)])
      result)
      
      (context (parseParams params))))
        