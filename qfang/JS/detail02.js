(function(){
    var detailList={
        init:function(){
            var id=location.hash.slice(1);//hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）。hash就是#号,当前的id为#1111,hash.slice(1)即为去掉#从1111开始;
            var data={id:id};
            this.queryDetail(data);
        },
        renderDetail:function(res){
            var data=res.articleDetail;
            $("#title").html(data.title);
            $("#createDate").html(data.createDate);
            $("#abstract").html(data.abstract);
            $("#content").html(data.content);


        },

        queryDetail:function(data){
            var self=this;
            $.ajax({
                url:"http://127.0.0.1/qfang/qfangdata/detail.json",
                //url:"http://192.168.2.102/qfang/qfangdata/list.json",
                type:"get",
                dataType:"json",
                data:data,
                success:function(res){
                    if(res.resCode=="000"){
                        self.renderDetail(res)
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络错误,稍后再试")
                }

            })
        }
    }
    detailList.init();
})()


/*(function(){
    var detailList={
        init:function(){
            var id=location.hash.slice(1);
            var data={id:id};
            this.queryDetail(data);
        },
        renderDetail:function(res){
            var data=res.articleDetail;
            $("#createDate").html(data.createDate);
            $("#title").html(data.title);
            $("#abstract").html(data.abstract);
            $("#content").html(data.content);

        },
        queryDetail:function(data){
            var self=this;
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangDetail.php",
                type:"get",
                dataType:"json",
                data:data,
                success:function(res){
                    if(res.resCode=="000"){
                        self.renderDetail(res)
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络错误,稍后再试!")

                }
            })
        }
    }
    detailList.init();
})()*/
