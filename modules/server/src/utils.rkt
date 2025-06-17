#lang racket/base

(provide (all-defined-out))

(define (parse-body body)
  (let* ([port (open-input-string body)]
         [reader (make-parsing-reader port)]
         [result (read reader)])
    result))

(define (parse-params params))  