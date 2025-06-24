#lang racket/base

(provide (all-defined-out))

(define (context context)
  (quote define context))


(define (parse params)
  (context (eBody body)
    (let* ([port (open-input-string body)]
           [reader (make-parsing-reader port)]
           [result (read reader)])
      result)
      
      (context (parseParams params))))

(define (parseBody body)
  (let* ([port (open-input-string body)]
         [reader (make-parsing-reader port)]
         [result (read reader)])
    result))

(define (parseParams params)
  (let* ([port (open-input-string params)]
         [reader (make-parsing-reader port)]
         [result (read reader)])
    result))
