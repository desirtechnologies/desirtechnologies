// src/vm/mod.rs
pub struct VM {
    pub registers: Vec<Value>,
    pub memory: Vec<u8>,
    pub pc: usize,
    pub running: bool,
}

#[derive(Clone, Debug)]
pub enum Value {
    Int(i64),
    Float(f64),
    Symbol(String),
    Cons(Box<Value>, Box<Value>),
    Nil,
}

impl VM {
    pub fn new() -> Self {
        VM {
            registers: vec![Value::Nil; 16], // Fixed number of registers
            memory: Vec::with_capacity(1024), // 1KB initial memory
            pc: 0,
            running: true,
        }
    }

    pub fn eval(&mut self, expr: &Expr) -> Result<Value, RuntimeError> {
        match expr {
            Expr::Literal(val) => Ok(val.clone()),
            Expr::Symbol(sym) => self.lookup_symbol(sym),
            Expr::List(elems) => self.eval_list(elems),
        }
    }
    
    // ... other VM methods
}