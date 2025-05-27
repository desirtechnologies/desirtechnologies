#lang web-server/insta

(define (start #:(#:port port (>= 0)) [port 8000])
  (displayln (~a "http://localhost:" port))
  (serve/servlet application
                 #:servlet-path "/"
                 #:port port
                 #:servlet-regexp #rx"ws$"
                 #:stateless? #t
                 #:launch-browser? #f
                 #:log-file (current-output-port)
                 #:command-line? #f
                 #:exit-on-errors? #f
                 #:listen-ip #f))
