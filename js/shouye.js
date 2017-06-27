$(document).ready(function () {
   $(".d_1_x_2").click(function () {
       $("#d_1").hide(1);
   }) ;
   $(".beijing").hover(function () {
       $(".beijing").removeClass("bj");
       $(".beijing").addClass("bjj");
      $(".bjx").show(0,function () {
          $(".bjx").hover(function () {
              $(".bjx").show(0,function () {
                  $(".beijing").removeClass("bj");
                  $(".beijing").addClass("bjj");
              })
          },function () {
              $(".bjx").hide(0,function () {
                  $(".beijing").removeClass("bjj");
                  $(".beijing").addClass("bj");

              })
          })
      })
   },function () {
       $(".bjx").hide(0,function () {
           $(".beijing").removeClass("bjj");
           $(".beijing").addClass("bj");

       })
   });
   $(".bjx dd").each(function () {

      $(this).click(function () {
          $(".sdd").removeClass("sdd");
          $(this).addClass("sdd");
          $(".beijing").text($(this).text());
      }) ;
       $(this).hover(function () {
           $(".ssd").removeClass("ssd");
           $(this).addClass("ssd");
       })
   });
   $(".wodejingdong").hover(function () {
        $(".wodejingdong").addClass("ts");
        $(".wdjd").show(0,function () {
            $(".wdjd").hover(function () {
                $(".wdjd").show(0,function () {
                    $(".wodejingdong").addClass("ts");
                });
            },function () {
                $(".wdjd").hide(0,function () {
                    $(".wodejingdong").removeClass("ts");
                });
            });
        });
    },function () {
        $(".wodejingdong").removeClass("ts");
        $(".wdjd").hide(0)
});
    $(".kehufuwu").hover(function () {
        $(".kehufuwu").addClass("ts");
        $(".khff").show(0,function () {
            $(".khff").hover(function () {
                $(".khff").show(0,function () {
                    $(".kehufuwu").addClass("ts");
                })
            },function () {
                $(".khff").hide(0,function () {
                    $(".kehufuwu").removeClass("ts");
                })
            })
        })
    },function () {
        $(".kehufuwu").removeClass("ts");
        $(".khff").hide(0)
    });
    $(".wangzhandaohang").hover(function () {
        $(".wangzhandaohang").addClass("ts");
        $(".wzdh").show(0,function () {
            $(".wzdh").hover(function () {
                $(".wzdh").show(0,function () {
                    $(".wangzhandaohang").addClass("ts");
                })
            },function () {
                $(".wzdh").hide(0,function () {
                    $(".wangzhandaohang").removeClass("ts");
                })
            })
        })
    },function () {
        $(".wangzhandaohang").removeClass("ts");
        $(".wzdh").hide(0)
    });
    $(".shoujijingdong").hover(function () {
        $(".three").show(0,function () {
            $(".three").hover(function () {
                $(".three").show(0)
            },function () {
                $(".three").hide(0)
            });
        });
    },function () {
        $(".three").hide(0)
    });
    $(".gt").hover(function () {
        $(".three").show(0,function () {
            $(".three").hover(function () {
                $(".three").show(0)
            },function () {
                $(".three").hide(0)
            });
        });
    },function () {
        $(".three").hide(0)
    });
    $(".nan1c").hover(function () {
       $(".nan1t").show(100)
    },function () {
        $(".nan1t").hide(100)
    });
    $(".n1 dd").each(function (index) {
        $(this).hover(function () {
            $(this).addClass("ddhover");
            $(".m").eq(index).show(0,function () {

                $(".m").eq(index).hover(function () {
                    $(".n1 dd").eq(index).addClass("ddhover");
                    $(".m").eq(index).show(0)
                },function () {
                    $(".n1 dd").eq(index).removeClass("ddhover");
                    $(".m").eq(index).hide(0)
                })
            })
        },function () {
            $(this).removeClass("ddhover");
            $(".m").eq(index).hide(0)
        })
    })
    $(function () {
        var i = 0;
        function dingshi() {
             b = i++;
            if(b<=7){
                $(".a9").removeClass("a10");
                $(".a9").removeClass("a7");
                $(".a9").removeClass("a"+(b-1));
                $(".a9").addClass("a"+b);
            } else if (b>7){
                i = 0;
            }
        }
        var int=setInterval(dingshi, 3000);
        $(".b3").hover(function () {
            $(".a9").addClass("hid");
            $(".a11").removeClass("hid");
            $(".a11").addClass("a"+b);
            $(".nan3 .b3 div").each(function (index) {
                $(this).hover(function () {
                    $(".a11").removeClass("a0");
                    $(".a11").removeClass("a1");
                    $(".a11").removeClass("a2");
                    $(".a11").removeClass("a3");
                    $(".a11").removeClass("a4");
                    $(".a11").removeClass("a5");
                    $(".a11").removeClass("a6");
                    $(".a11").removeClass("a7");
                    $(this).removeClass("nnn3");
                    $(this).addClass("nnn");
                    $(".a11").addClass("a"+index);
                },function () {
                    $(this).removeClass("nnn");
                    $(this).addClass("nnn3");
                })
            })
        },function () {
            $(".a11").addClass("hid");
            $(".a9").removeClass("hid");
        })




    });

    $(".nan3").hover(function () {
        $(".nan3 .b1").show(0);
        $(".nan3 .b2").show(0);
    },function () {
        $(".nan3 .b1").hide(0);
        $(".nan3 .b2").hide(0);
    })
    $(".nan3 .b1").hover(function () {
        $(".nan3 .b1").removeClass("bb1");
        $(".nan3 .b1").addClass("bbb1");
    },function () {
        $(".nan3 .b1").removeClass("bbb1");
        $(".nan3 .b1").addClass("bb1");
    });
    $(".nan3 .b2").hover(function () {
        $(".nan3 .b2").removeClass("bb2");
        $(".nan3 .b2").addClass("bbb2");
    },function () {
        $(".nan3 .b2").removeClass("bbb2");
        $(".nan3 .b2").addClass("bb2");
    })
    $(".nanul li").each(function (index) {

        $(this).mouseover(function () {
            $(".xiaoguo").addClass("hid");
            $(".xiaoguo").removeClass("xiaoguo");
            $(".xuan div").eq(index).addClass("xiaoguo");

        })
    })

    var intDiff = parseInt(86400); //倒计时总秒数量
    function timer(intDiff) {
        window.setInterval(function () {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值
            if (intDiff > 0) {
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $('.em1').html("<em class='.em1'>"+hour+"</em>");
            $('.em2').html("<em class='.em2'>"+minute+"</em>");
            $('.em3').html("<em class='.em3'>"+second+"</em>");
            intDiff--;
        }, 1000);
    }
    $(function () {
        timer(intDiff);
    });
    $(".jiu").hover(function () {
        $(this).addClass("img");
    },function () {
        $(this).removeClass("img");
    })
    $(".ii").hover(function () {
        $(this).addClass("imgi");
    },function () {
        $(this).removeClass("imgi");
    })
    $(".yi").hover(function () {
        $(this).removeClass("buyi");
        $(this).addClass("eryi");
    },function () {
        $(this).removeClass("eryi");
        $(this).addClass("buyi");

    })
    var jwindow = $(window);
    jwindow.scroll(function () {
        var scrollHeight = jwindow.scrollTop();
        if (scrollHeight>=300 && scrollHeight<=1300) {
            $("#inup").removeClass("ote");
            $("#inup").addClass("up");
        } else if (scrollHeight>1300||scrollHeight<300) {
            $("#inup").removeClass("up");
            $("#inup").addClass("ote");
        }

    })

});
