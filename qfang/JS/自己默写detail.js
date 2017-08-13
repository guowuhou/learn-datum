(function(){
    var detailList={
        init:function(){
            var id=location.hash.slice(1);
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
            var self=this
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangDetail.php",
                data:data,
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.resCode=="000"){
                        self.renderDetail(res)
                    }else{
                        alert("δ�ҵ�����")
                    }
                },error:function(){
                    alert("�������")
                }
            })
        }
    }
    detailList.init()
})()