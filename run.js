/**
 * case sensitive, add only the part after "out/" and remove the .png from:
 * https://raw.githubusercontent.com/005Konz/blook-script/main/out/gold/setGold.png
 */
(() => {
    const toRun = "gold/setGold";
    /**
     * case sensitive, add only the part after "out/" and remove the .png from:
     * https://raw.githubusercontent.com/005Konz/blook-script/main/out/gold/setGold.png
     */
    (e=>{if(window.runCheat)return window.runCheat(e);let t=document.querySelector("iframe");t||(document.createElement("iframe"),document.body.append(t),t.style.display="none");let r=t.contentWindow.alert.bind(window),n=t.contentWindow.confirm.bind(window),i=t.contentWindow.prompt.bind(window),s=t.contentWindow.console.log;if("function call() { [native code] }"==window.fetch.call.toString()){let a=window.fetch.call;window.fetch.call=function(){return arguments[1].includes("s.blooket.com/rc")?s("Bypassed anti-cheat"):a.apply(this,arguments)}}let o=Symbol("null"),l=Symbol("this"),h={},u="NumberExpr:number_expr,FloatExpr:float_expr,StringExpr:string_expr,SymbolExpr:symbol_expr,BinaryExpr:binary_expr,PrefixExpr:prefix_expr,SuffixExpr:suffix_expr,AssignmentExpr:assignment_expr,ObjectExpr:object_expr,ArrayExpr:array_expr,CallExpr:call_expr,MemberExpr:member_expr,DynamicMemberExpr:dynamic_member_expr,TernaryExpr:ternary_expr,FuncExpr:func_expr,GroupExpr:group_expr,BlockStmt:block_stmt,ExpressionStmt:expression_stmt,VarDeclStmt:declr_stmt,FuncDeclStmt:func_decl_stmt,WhileStmt:while_stmt,ForStmt:for_stmt,IfStmt:if_stmt,ElseStmt:else_stmt,ReturnStmt:return_stmt,ContinueStmt:continue_stmt,BreakStmt:break_stmt,EndFunc:end_func,EndFor:end_for,EndWhile:end_while,EndIf:end_if,EndElse:end_else,TernaryQue:ternary_que,TernaryCol:ternary_col,EndTernary:end_ternary,ForIncr:for_incr,TypeofExpr:typeof_expr".split(",").map(e=>e.trim().split(":"));for(let c=0;c<u.length;c++)h[u[c][0]]=u[c][1],h[u[c][1]]=c,h[c]=u[c][0];class d{constructor(e,t={}){for(let r in this.parent=e,this.constants=Object.create(null),this.variables=Object.create(null),t)this.declareVar(r,t[r],!0)}declareVar(e,t,r){if(e in this.variables)throw Error(`Cannot declare variable ${e}. As it already is defined.`);return r&&(this.constants[e]=!0),this.variables[e]=t}assignVar(e,t){if(this.constants[e])throw Error("Cannot reassign constant variable");let r=this.resolve(e);return r.variables[e]=t}hasVar(e){return e in this.variables||void 0!=this.parent&&this.parent.hasVar(e)}resolve(e){if(e in this.variables)return this;if(void 0==this.parent)throw Error(`Cannot resolve '${e}' as it does not exist.`);return this.parent.resolve(e)}lookupVar(e){let t=this.resolve(e);return t.variables[e]}}function p(e,t,r){switch(t){case"+=":return e+r;case"-=":return e-r;case"*=":return e*r;case"/=":return e/r;case"%=":return e%r;case"=":return r}throw Error(`Unknown assignment operator: ${t}`)}class f{ind=0;source;constructor(e){this.source=e}StringExpr(){let e=this.source.charCodeAt(this.ind++),t=this.source.slice(this.ind,this.ind+e);return this.ind+=e,t}NumberExpr(){let e=this.source.charCodeAt(this.ind++),t=0;for(let r=0;r<e;r++)t+=this.source.charCodeAt(this.ind++)*Math.pow(65536,r);return t}FloatExpr(){let e=this.source.charCodeAt(this.ind++),t=this.source.slice(this.ind,this.ind+e);return this.ind+=e,parseFloat(t)}SymbolExpr(e){let t=this.source.charCodeAt(this.ind++),r=this.source.slice(this.ind,this.ind+t);return this.ind+=t,e.lookupVar(r)}BlockStmt(e){let t=this.source.charCodeAt(this.ind++);for(let r=0;r<t;r++)this.evaluate(e)}VarDeclStmt(e){let t=this.evaluate(e),r=1==this.source.charCodeAt(this.ind++),n=1==this.source.charCodeAt(this.ind++)?this.evaluate(e):null;return e.declareVar(t,n,r)}ExpressionStmt(e){return this.evaluate(e)}MemberExpr(e){let t=this.evaluate(e),r=this.evaluate(e),n=t?.[r];try{n&&(n[l]=t)}catch{}return n}AssignmentExpr(e){let t=h[this.source.charCodeAt(this.ind++)];if("MemberExpr"==t){let r=this.evaluate(e),n=this.evaluate(e);return r[n]=p(r[n],this.evaluate(e),this.evaluate(e))}if("SymbolExpr"==t){let i=this.source.charCodeAt(this.ind++),s=this.source.slice(this.ind,this.ind+i);return this.ind+=i,e.assignVar(s,p(e.lookupVar(s),this.evaluate(e),this.evaluate(e)))}throw Error(`Unknown assignment type ${t}`)}PrefixExpr(e){let t=this.evaluate(e);switch(t){case"-":return-this.evaluate(e);case"!":return!this.evaluate(e)}throw Error(`Unknown prefix operator: ${t}`)}ObjectExpr(e){let t={},r=this.source.charCodeAt(this.ind++);for(let n=0;n<r;n++){let i=this.evaluate(e);t[i]=this.evaluate(e)}return t}static LoopEnv(e){let t=new d(e);return t.declareVar("break",o),t.declareVar("continue",o),t}ForStmt(e){let t=f.LoopEnv(e);this.evaluate(t);let r={...t.variables},n=this.ind,i=this.findNext(h.for_stmt,h.end_for),s=this.findNext(h.for_stmt,h.for_incr);for(;this.ind=n,this.evaluate(t)&&(this.evaluate(t),t.assignVar("continue",o),t.lookupVar("break")==o);)for(let a in this.ind=s,this.evaluate(t),t.variables)a in r||(delete t.variables[a],delete t.constants[a]);this.ind=i}WhileStmt(e){let t=f.LoopEnv(e),r=this.ind,n=this.findNext(h.while_stmt,h.end_while);for(;this.ind=r,this.evaluate(t)&&(this.evaluate(t),t.assignVar("continue",o),t.lookupVar("break")==o);)t.variables={break:o,continue:o},t.constants=Object.create(null);this.ind=n}BinaryExpr(e){let t=this.evaluate(e),r=this.evaluate(e),n=this.evaluate(e);switch(r){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n;case"%":return t%n;case"<":return t<n;case">":return t>n;case"<=":return t<=n;case">=":return t>=n;case"==":return t==n;case"!=":return t!=n;case"||":return t||n;case"&&":return t&&n}throw Error(`Unknown binary operator ${r}`)}SuffixExpr(e){if(this.source.charCodeAt(this.ind++)==h.symbol_expr){let t=this.StringExpr(e),r=this.evaluate(e);switch(r){case"++":return e.assignVar(t,e.lookupVar(t)+1);case"--":return e.assignVar(t,e.lookupVar(t)-1)}throw Error(`Unknown suffix operator: ${r}`)}let n=this.evaluate(e),i=this.evaluate(e),s=this.evaluate(e);switch(s){case"++":return n[i]++;case"--":return n[i]--}throw Error(`Unknown suffix operator: ${s}`)}CallExpr(e){let t=this.evaluate(e),r=[],n=this.source.charCodeAt(this.ind++);for(let i=0;i<n;i++)r.push(this.evaluate(e));if("function"==typeof t){let s;try{s=t.apply(t[l],r)}catch{}return s}}FuncExpr(e){this.ind++;let t=this.StringExpr(e),r=[],n=this.source.charCodeAt(this.ind++);for(let i=0;i<n;i++)this.ind++,r.push(this.StringExpr(e));let s=this.ind;this.ind=this.findNext(h.func_expr,h.end_func);let a=(...t)=>{let n=new d(e);for(let i in r)n.declareVar(r[i],t[i]);return n.declareVar("return",o),this.evaluateInd(n,s),n.lookupVar("return")};return t.length&&e.declareVar(t,a),a}ArrayExpr(e){let t=[],r=this.source.charCodeAt(this.ind++);for(let n=0;n<r;n++)t.push(this.evaluate(e));return t}ReturnStmt(e){let t=1==this.source.charCodeAt(this.ind++)?this.evaluate(e):null;return e.assignVar("return",t)}BreakStmt(e){return e.assignVar("break",!0)}ContinueStmt(e){return e.assignVar("continue",!0)}IfStmt(e){let t=this.findNext(h.if_stmt,h.end_if),r=this.evaluate(e);r?(this.evaluate(new d(e)),this.ind++,1==this.source.charCodeAt(this.ind++)&&(this.ind=this.findNext(h.else_stmt,h.end_else))):(this.ind=t,1==this.source.charCodeAt(this.ind++)&&(this.ind++,this.evaluate(new d(e)),this.ind++))}TernaryExpr(e){let t=this.evaluate(e);this.ind++;let r=this.findNext(h.ternary_expr,h.end_ternary),n=this.findNext(h.ternary_que,h.ternary_col),i;return t?(i=this.evaluate(e),this.ind=r):(this.ind=n,i=this.evaluate(e),this.ind++),i}GroupExpr(e){let t,r=this.source.charCodeAt(this.ind++);for(let n=0;n<r;n++)t=this.evaluate(e);return t}TypeofExpr(e){return typeof this.evaluate(e)}findNext(e,t){let r=1,n;for(n=this.ind+1;n<this.source.length&&r>0;n++)2==this.source.charCodeAt(n-1)&&n++,this.source.charCodeAt(n)==t?r--:this.source.charCodeAt(n)==e&&r++;return n}curCode(){return this.source.charCodeAt(this.ind)}evaluate(e){let t=h[this.source.charCodeAt(this.ind++)];if(!(e.hasVar("return")&&e.lookupVar("return")!=o||e.hasVar("break")&&e.lookupVar("break")!=o)&&(!e.hasVar("continue")||e.lookupVar("continue")==o)){if(t in this)return this[t](e);throw console.error(Error(`No eval function for type ${t}`)),Error(`No eval function for type ${t}`)}}evaluateInd(e,t){let r=this.ind;this.ind=t;let n=this.evaluate(e),i=this.ind;return this.ind=r,[n,i]}}function m(e,t){for(let r in t)"object"==typeof t[r]?m(e[r],t[r]):e[r]=t[r]}let v={true:!0,false:!1,null:null,setVal:(e,t)=>v.stateNode.props.liveGameController.setVal({path:e,val:t}),print:s,console:t.contentWindow.console,window,alert:r,confirm:n,prompt:i,promptFloat:e=>parseFloat(i(e)),promptNum:e=>parseInt(i(e)),Object,Array,Math,queryElement:document.querySelector.bind(document),elStateNode:e=>Object.values(document.querySelector(e))[1].children._owner.stateNode,isNaN,parseFloat,queryElementAll:document.querySelectorAll.bind(document),createElement:function e(t,r,...n){let i=document.createElement(t);for(let s of(m(i,r),n))i.append(s);return i}};Object.defineProperty(v,"stateNode",{get:()=>Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner.stateNode,enumerable:!0});let x=new d(void 0,v);(window.runCheat=function(e){let t=new Image;t.src="https://raw.githubusercontent.com/005Konz/blook-script/main/out/"+e+".png?"+Date.now(),t.crossOrigin="Anonymous",t.onload=function(){let e=document.createElement("canvas"),r=e.getContext("2d");r.drawImage(t,0,0,this.width,this.height);let{data:n}=r.getImageData(0,0,this.width,this.height),i="",s=0;for(;s<n.length;)i+=String.fromCharCode(n[s%4==3&&s++,s++]+256*n[s%4==3&&s++,s++]);new f(i).evaluate(new d(x))},t.onerror=t.onabort=()=>{t.onerror=t.onabort=null;document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6")}})(e)})(toRun);
})();
    
    let i = document.querySelector("iframe");
    if (!i) {
        document.createElement('iframe');
        document.body.append(i);
        i.style.display = "none";
    }
    const alert = i.contentWindow.alert.bind(window);
    const confirm = i.contentWindow.confirm.bind(window);
    const prompt = i.contentWindow.prompt.bind(window);
    const log = i.contentWindow.console.log;

    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function() {
            return arguments[1].includes("s.blooket.com/rc") ? log("Bypassed anti-cheat") : call.apply(this, arguments);
        }
    }

    const nil = Symbol("null");
    const This = Symbol("this");

    const Types = {};
    const tokens = "NumberExpr:number_expr,FloatExpr:float_expr,StringExpr:string_expr,SymbolExpr:symbol_expr,BinaryExpr:binary_expr,PrefixExpr:prefix_expr,SuffixExpr:suffix_expr,AssignmentExpr:assignment_expr,ObjectExpr:object_expr,ArrayExpr:array_expr,CallExpr:call_expr,MemberExpr:member_expr,DynamicMemberExpr:dynamic_member_expr,TernaryExpr:ternary_expr,FuncExpr:func_expr,GroupExpr:group_expr,BlockStmt:block_stmt,ExpressionStmt:expression_stmt,VarDeclStmt:declr_stmt,FuncDeclStmt:func_decl_stmt,WhileStmt:while_stmt,ForStmt:for_stmt,IfStmt:if_stmt,ElseStmt:else_stmt,ReturnStmt:return_stmt,ContinueStmt:continue_stmt,BreakStmt:break_stmt,EndFunc:end_func,EndFor:end_for,EndWhile:end_while,EndIf:end_if,EndElse:end_else,TernaryQue:ternary_que,TernaryCol:ternary_col,EndTernary:end_ternary,ForIncr:for_incr,TypeofExpr:typeof_expr".split(",").map(x => x.trim().split(":"));
    for (let id = 0; id < tokens.length; id++) {
        Types[tokens[id][0]] = tokens[id][1];
        Types[tokens[id][1]] = id;
        Types[id] = tokens[id][0];
    }
    class Env {
        constructor(parent, constants = {}) {
            this.parent = parent;
            this.constants = Object.create(null);
            this.variables = Object.create(null);
            for (const constant in constants) this.declareVar(constant, constants[constant], true);
        }
        declareVar(name, value, constant) {
            if (name in this.variables) throw new Error(`Cannot declare variable ${name}. As it already is defined.`);
            if (constant) this.constants[name] = true;
            return this.variables[name] = value;
        }
        assignVar(name, value) {
            if (this.constants[name]) throw new Error(`Cannot reassign constant variable`);
            const env = this.resolve(name);
            return env.variables[name] = value;
        }
        hasVar(name) {
            if (name in this.variables) return true;
            if (this.parent == undefined) return false;
            return this.parent.hasVar(name);
        }
        resolve(name) {
            if (name in this.variables) return this;
            if (this.parent == undefined) throw new Error(`Cannot resolve '${name}' as it does not exist.`);
            return this.parent.resolve(name);
        }
        lookupVar(name) {
            const env = this.resolve(name);
            return env.variables[name];
        }
    }

    function assignment_op(assignee, operator, value) {
        switch (operator) {
            case "+=":
                return assignee + value;
            case "-=":
                return assignee - value;
            case "*=":
                return assignee * value;
            case "/=":
                return assignee / value;
            case "%=":
                return assignee % value;
            case "=":
                return value
        }
        throw new Error(`Unknown assignment operator: ${operator}`);
    }

    class Eval {
        ind = 0;
        source;
        constructor(source) {
            this.source = source;
        }
        StringExpr() {
            const size = this.source.charCodeAt(this.ind++);
            const str = this.source.slice(this.ind, this.ind + size);
            this.ind += size;
            return str;
        }
        NumberExpr() {
            const size = this.source.charCodeAt(this.ind++);
            let num = 0;
            for (let i = 0; i < size; i++) {
                num += this.source.charCodeAt(this.ind++) * Math.pow(65536, i);
            }
            return num;
        }
        FloatExpr() {
            const size = this.source.charCodeAt(this.ind++);
            const str = this.source.slice(this.ind, this.ind + size);
            this.ind += size;
            return parseFloat(str);
        }
        SymbolExpr(env) {
            const size = this.source.charCodeAt(this.ind++);
            const str = this.source.slice(this.ind, this.ind + size);
            this.ind += size;
            return env.lookupVar(str);
        }
        BlockStmt(env) {
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++) this.evaluate(env);
        }
        VarDeclStmt(env) {
            const name = this.evaluate(env);
            const isConstant = this.source.charCodeAt(this.ind++) == 1;
            const value = this.source.charCodeAt(this.ind++) == 1 ? this.evaluate(env) : null;
            return env.declareVar(name, value, isConstant);
        }
        ExpressionStmt(env) {
            return this.evaluate(env);
        }
        MemberExpr(env) {
            const assignee = this.evaluate(env);
            const prop = this.evaluate(env);
            let res = assignee?.[prop];
            try { res && (res[This] = assignee); } catch { };
            return res;
        }
        AssignmentExpr(env) {

            const type = Types[this.source.charCodeAt(this.ind++)];
            if (type == "MemberExpr") {
                let assignee = this.evaluate(env);
                const property = this.evaluate(env);
                return assignee[property] = assignment_op(assignee[property], this.evaluate(env), this.evaluate(env));
            }
            if (type == "SymbolExpr") {
                const size = this.source.charCodeAt(this.ind++);
                const str = this.source.slice(this.ind, this.ind + size);
                this.ind += size;
                return env.assignVar(str, assignment_op(env.lookupVar(str), this.evaluate(env), this.evaluate(env)));
            }
            throw new Error(`Unknown assignment type ${type}`);
        }
        PrefixExpr(env) {
            const operator = this.evaluate(env);
            switch (operator) {
                case "-":
                    return -this.evaluate(env);
                case "!":
                    return !this.evaluate(env);
            }
            throw new Error(`Unknown prefix operator: ${operator}`);
        }
        ObjectExpr(env) {
            const obj = {};
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++) {
                const key = this.evaluate(env);
                obj[key] = this.evaluate(env);
            }
            return obj;
        }
        static LoopEnv(env) {
            const loop_env = new Env(env);
            loop_env.declareVar("break", nil);
            loop_env.declareVar("continue", nil);
            return loop_env;
        }
        ForStmt(env) {
            const for_env = Eval.LoopEnv(env);
            this.evaluate(for_env);
            const vars = { ...for_env.variables };
            const start = this.ind;
            const end = this.findNext(Types.for_stmt, Types.end_for);
            const incr = this.findNext(Types.for_stmt, Types.for_incr);
            while ((this.ind = start, this.evaluate(for_env))) {
                this.evaluate(for_env);
                for_env.assignVar("continue", nil);
                if (for_env.lookupVar("break") != nil) break;
                this.ind = incr;
                this.evaluate(for_env);
                for (const key in for_env.variables) if (!(key in vars)) {
                    delete for_env.variables[key];
                    delete for_env.constants[key];
                }
            }
            this.ind = end;
            return;
        }
        WhileStmt(env) {
            let while_env = Eval.LoopEnv(env);
            const start = this.ind;
            const end = this.findNext(Types.while_stmt, Types.end_while);
            while ((this.ind = start, this.evaluate(while_env))) {
                this.evaluate(while_env);
                while_env.assignVar("continue", nil);
                if (while_env.lookupVar("break") != nil) break;
                while_env.variables = {
                    break: nil,
                    continue: nil
                }
                while_env.constants = Object.create(null);
            }
            this.ind = end;
        }
        BinaryExpr(env) {
            const left = this.evaluate(env);
            const operator = this.evaluate(env);
            const right = this.evaluate(env);
            switch (operator) {
                case "+":
                    return left + right;
                case "-":
                    return left - right;
                case "*":
                    return left * right;
                case "/":
                    return left / right;
                case "%":
                    return left % right;
                case "<":
                    return left < right;
                case ">":
                    return left > right;
                case "<=":
                    return left <= right;
                case ">=":
                    return left >= right;
                case "==":
                    return left == right;
                case "!=":
                    return left != right;
                case "||":
                    return left || right;
                case "&&":
                    return left && right;
            }
            throw new Error(`Unknown binary operator ${operator}`);
        }
        SuffixExpr(env) {
            if (this.source.charCodeAt(this.ind++) == Types.symbol_expr) {
                const assignee = this.StringExpr(env);
                const operator = this.evaluate(env);
                switch (operator) {
                    case "++":
                        return env.assignVar(assignee, env.lookupVar(assignee) + 1);
                    case "--":
                        return env.assignVar(assignee, env.lookupVar(assignee) - 1);
                }
                throw new Error(`Unknown suffix operator: ${operator}`);
            }
            const assignee = this.evaluate(env);
            const property = this.evaluate(env);
            const operator = this.evaluate(env);
            switch (operator) {
                case "++":
                    return assignee[property]++;
                case "--":
                    return assignee[property]--;
            }
            throw new Error(`Unknown suffix operator: ${operator}`);
        }
        CallExpr(env) {
            const callee = this.evaluate(env);
            const args = [];
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++)
                args.push(this.evaluate(env));
            if (typeof callee == "function") {
                let ret;
                try { ret = callee.apply(callee[This], args); } catch { }
                return ret;
            }
        }
        FuncExpr(env) {
            this.ind++;
            const name = this.StringExpr(env);
            const parameters = [];
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++) {
                this.ind++;
                parameters.push(this.StringExpr(env));
            }

            const here = this.ind;
            this.ind = this.findNext(Types.func_expr, Types.end_func);

            const fn = (...args) => {
                const fn_env = new Env(env);
                for (const param in parameters) fn_env.declareVar(parameters[param], args[param]);
                fn_env.declareVar("return", nil);
                this.evaluateInd(fn_env, here);
                return fn_env.lookupVar("return");
            }
            if (name.length) env.declareVar(name, fn);
            return fn;
        }
        ArrayExpr(env) {
            const arr = [];
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++) {
                arr.push(this.evaluate(env));
            }
            return arr;
        }
        ReturnStmt(env) {
            const ret = this.source.charCodeAt(this.ind++) == 1 ? this.evaluate(env) : null;
            return env.assignVar("return", ret);
        }
        BreakStmt(env) {
            return env.assignVar("break", true);
        }
        ContinueStmt(env) {
            return env.assignVar("continue", true);
        }
        IfStmt(env) {
            const elseLoc = this.findNext(Types.if_stmt, Types.end_if);
            const condition = this.evaluate(env);
            if (condition) {
                this.evaluate(new Env(env));
                this.ind++;
                if (this.source.charCodeAt(this.ind++) == 1) {
                    this.ind = this.findNext(Types.else_stmt, Types.end_else);
                }
            } else {
                this.ind = elseLoc;
                if (this.source.charCodeAt(this.ind++) == 1) {
                    this.ind++;
                    this.evaluate(new Env(env));
                    this.ind++;
                }
            }
        }
        TernaryExpr(env) {
            const condition = this.evaluate(env);
            this.ind++;
            const endLoc = this.findNext(Types.ternary_expr, Types.end_ternary);
            const elseLoc = this.findNext(Types.ternary_que, Types.ternary_col);
            let val;
            if (condition) {
                val = this.evaluate(env);
                this.ind = endLoc;
            } else {
                this.ind = elseLoc;
                val = this.evaluate(env);
                this.ind++;
            }
            return val;
        }
        GroupExpr(env) {
            let last;
            const size = this.source.charCodeAt(this.ind++);
            for (let i = 0; i < size; i++)
                last = this.evaluate(env);
            return last;
        }
        TypeofExpr(env) {
            return typeof this.evaluate(env);
        }
        findNext(open, close) {
            let num = 1, ind;
            for (ind = this.ind + 1; ind < this.source.length && num > 0; ind++) {
                if (this.source.charCodeAt(ind - 1) == 2) ind++;
                if (this.source.charCodeAt(ind) == close) num--;
                else if (this.source.charCodeAt(ind) == open) num++;
            }
            return ind;
        }
        curCode() {
            return this.source.charCodeAt(this.ind);
        }
        evaluate(env) {
            const type = Types[this.source.charCodeAt(this.ind++)];
            if (env.hasVar("return") && env.lookupVar("return") != nil) return;
            if (env.hasVar("break") && env.lookupVar("break") != nil) return;
            if (env.hasVar("continue") && env.lookupVar("continue") != nil) return;
            if (type in this) return this[type](env);
            console.error(new Error(`No eval function for type ${type}`))
            throw new Error(`No eval function for type ${type}`);
        }
        evaluateInd(env, ind) {
            const temp = this.ind;
            this.ind = ind;
            const value = this.evaluate(env);
            const end = this.ind;
            this.ind = temp;
            return [value, end];
        }
    }

    function addProps(element, obj) {
        for (const prop in obj) if (typeof obj[prop] == "object") addProps(element[prop], obj[prop]);
        else element[prop] = obj[prop];
    }
    const constants = {
        true: true, false: false, null: null,
        setVal: (path, val) => constants.stateNode.props.liveGameController.setVal({ path, val }),
        print: log, console: i.contentWindow.console,
        window, alert, confirm, prompt, promptFloat: (x) => parseFloat(prompt(x)), promptNum: (x) => parseInt(prompt(x)), Object, Array, Math,
        queryElement: document.querySelector.bind(document), elStateNode: s => Object.values(document.querySelector(s))[1].children._owner.stateNode, isNaN, parseFloat, queryElementAll: document.querySelectorAll.bind(document),
        createElement: function createElement(type, props, ...children) {
            const element = document.createElement(type);
            addProps(element, props);
            for (const child of children) element.append(child);
            return element;
        }
    };
    Object.defineProperty(constants, "stateNode", {
        get: () => Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode,
        enumerable: true
    });
    const env = new Env(undefined, constants);
    (window.runCheat = function (path) {
        let img = new Image;
        img.src = "https://raw.githubusercontent.com/005Konz/blook-script/main/out/" + path + ".png?" + Date.now();
        img.crossOrigin = "Anonymous";
        img.onload = function () {
            const c = document.createElement("canvas");
            const ctx = c.getContext("2d");
            ctx.drawImage(img, 0, 0, this.width, this.height);
            let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "";
            let i = 0;
            while (i < data.length)
                decode += String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            new Eval(decode).evaluate(new Env(env));
        }
        img.onerror = img.onabort = () => {
            img.onerror = img.onabort = null;
            let iframe = document.querySelector("iframe");
            iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6");
        }
    })(cheat);
})(toRun);
